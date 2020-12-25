import { PeerEvent, SignalingChannel } from '@quertc/core'
import { code } from '@quertc/controls'
import { Subject, Subscription } from 'rxjs'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core'
import { MediaStreamService } from '@quertc/shared'

@Component({
  selector: 'quertc-perfect-negotiation',
  templateUrl: './perfect-negotiation.component.html',
  styleUrls: ['./perfect-negotiation.component.scss'],
})
export class PerfectNegotiationComponent implements AfterViewInit, OnDestroy {
  title = 'client-app'

  pc: RTCPeerConnection
  // localStream: MediaStream
  active = new Subject<boolean>()
  active$ = this.active.asObservable()
  sender = code()

  subs: Subscription
  /**
   * manter o controle de algum estado de
   * negociação para evitar corridas e erros
   */
  makingOffer = false
  ignoreOffer = false
  isSettingRemoteAnswerPending = false

  @ViewChild('selfView') selfViewRef: ElementRef<HTMLVideoElement>
  selfView: HTMLVideoElement

  @ViewChild('remoteView') remoteViewRef: ElementRef<HTMLVideoElement>
  remoteView: HTMLVideoElement

  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  constructor(
    private signaling: SignalingChannel,
    public stream: MediaStreamService
  ) {}

  start = async () => {
    try {
      this.stream.currentStream = await this.stream.getUserMedia()
      for (const track of this.stream.currentStream.getTracks()) {
        this.pc.addTrack(track, this.stream.currentStream)
      }
      this.selfView.srcObject = this.stream.currentStream
      this.selfView.muted = true
    } catch (err) {
      console.error(err)
    }
  }

  restart = async () => {
    this.offerOptions.iceRestart = true
    this.makeOffer(this.offerOptions)
  }

  async makeOffer(options?: RTCOfferOptions) {
    try {
      this.makingOffer = true
      await this.pc.setLocalDescription(await this.pc.createOffer(options))
      if (this.pc.localDescription) {
        this.signaling.send({
          sender: this.sender,
          description: this.pc.localDescription,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.makingOffer = false
    }
  }

  ngAfterViewInit() {
    this.selfView = this.selfViewRef.nativeElement
    this.remoteView = this.remoteViewRef.nativeElement

    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    })

    this.pc.addEventListener('track', ({ track, streams }) => {
      // assim que a mídia para uma trilha remota chegar, mostre-a no elemento de vídeo remoto
      track.addEventListener('unmute', () => {
        // não defina srcObject novamente se já estiver definido.
        if (this.remoteView.srcObject) return
        this.remoteView.srcObject = streams[0]
        this.active.next(true)
      })
    })

    //
    //
    //  A lógica de negociação perfeita, separada do resto da aplicação
    //

    // enviar qualquer candidato de gelo para o outro par
    this.pc.addEventListener('icecandidate', ({ candidate }) => {
      if (candidate) {
        this.signaling.send({ sender: this.sender, candidate })
      }
    })

    // deixe o evento "necessário para a negociação" gerar a oferta
    this.pc.addEventListener('negotiationneeded', async () => {
      this.makeOffer(this.offerOptions)
    })

    this.subs = this.signaling.message$.subscribe(
      async ({ sender, description, candidate }) => {
        console.log('sender: ', sender)
        try {
          if (description) {
            // Uma oferta pode chegar enquanto estamos ocupados processando SRD (resposta).
            // Nesse caso, estaremos "estáveis" no momento em que a oferta for processada
            // então é seguro encadear em nossa Cadeia de Operações agora.
            const readyForOffer =
              !this.makingOffer &&
              (this.pc.signalingState == 'stable' ||
                this.isSettingRemoteAnswerPending)
            const offerCollision =
              description.type == PeerEvent.Offer && !readyForOffer

            const polite = sender === this.sender

            this.ignoreOffer = polite && offerCollision
            if (this.ignoreOffer) {
              return
            }
            this.isSettingRemoteAnswerPending =
              description.type == PeerEvent.Answer

            await this.pc.setRemoteDescription(description) // SRD reverte conforme necessário

            this.isSettingRemoteAnswerPending = false

            if (description.type == PeerEvent.Offer) {
              await this.pc.setLocalDescription(await this.pc.createAnswer())
              if (this.pc.localDescription) {
                this.signaling.send({ description: this.pc.localDescription })
              }
            }
          } else if (candidate) {
            try {
              await this.pc.addIceCandidate(candidate)
            } catch (err) {
              if (!this.ignoreOffer) throw err // Suprimir os candidatos da oferta ignorada
            }
          }
        } catch (err) {
          console.error(err)
        }
      }
    )

    this.start()
  }

  hangup() {
    console.log('Ending call')
    this.stream.currentStream.getTracks().forEach((t) => t.stop())
    if (this.pc) {
      this.pc.close()
      Object.defineProperties(this.pc, {})
    }
  }

  ngOnDestroy() {
    this.hangup()
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }
}
