import { SignalingChannel } from '@quertc/core'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { uuid } from './signaling.utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'client-app'

  pc: RTCPeerConnection

  sender = uuid()

  @ViewChild('selfView') selfViewRef: ElementRef<HTMLVideoElement>
  selfView: HTMLVideoElement

  @ViewChild('remoteView') remoteViewRef: ElementRef<HTMLVideoElement>
  remoteView: HTMLVideoElement

  constructor(private signaling: SignalingChannel) {}

  start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      for (const track of stream.getTracks()) {
        this.pc.addTrack(track, stream)
      }
      this.selfView.srcObject = stream
    } catch (err) {
      console.error(err)
    }
  }

  ngAfterViewInit() {
    this.selfView = this.selfViewRef.nativeElement
    this.remoteView = this.remoteViewRef.nativeElement

    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    })

    this.pc.ontrack = ({ track, streams }) => {
      // assim que a mídia para uma trilha remota chegar, mostre-a no elemento de vídeo remoto
      track.onunmute = () => {
        // não defina srcObject novamente se já estiver definido.
        if (this.remoteView.srcObject) return
        this.remoteView.srcObject = streams[0]
      }
    }

    /**
     * - A lógica de negociação perfeita, separada do resto da aplicação -
     */
    //

    // manter o controle de algum estado de negociação para evitar corridas e erros
    let makingOffer = false
    let ignoreOffer = false
    let isSettingRemoteAnswerPending = false

    // enviar qualquer candidato de gelo para o outro par
    this.pc.addEventListener('icecandidate', ({ candidate }) => {
      if (candidate) {
        this.signaling.send({ sender: this.sender, candidate })
      }
    })

    // deixe o evento "necessário para a negociação" gerar a oferta
    this.pc.addEventListener('negotiationneeded', async () => {
      try {
        makingOffer = true
        await this.pc.setLocalDescription(null)
        this.signaling.send({
          sender: this.sender,
          description: this.pc.localDescription,
        })
      } catch (err) {
        console.error(err)
      } finally {
        makingOffer = false
      }
    })

    this.signaling.message$.subscribe(
      async ({ sender, description, candidate }) => {
        console.log('sender: ', sender)
        try {
          if (description) {
            // Uma oferta pode chegar enquanto estamos ocupados processando SRD (resposta).
            // Nesse caso, estaremos "estáveis" no momento em que a oferta for processada
            // então é seguro encadear em nossa Cadeia de Operações agora.
            const readyForOffer =
              !makingOffer &&
              (this.pc.signalingState == 'stable' ||
                isSettingRemoteAnswerPending)
            const offerCollision = description.type == 'offer' && !readyForOffer

            const polite = sender !== this.sender
            ignoreOffer = !polite && offerCollision
            if (ignoreOffer) {
              return
            }
            isSettingRemoteAnswerPending = description.type == 'answer'
            await this.pc.setRemoteDescription(description) // SRD reverte conforme necessário
            isSettingRemoteAnswerPending = false
            if (description.type == 'offer') {
              await this.pc.setLocalDescription(null)
              this.signaling.send({ description: this.pc.localDescription })
            }
          } else if (candidate) {
            try {
              await this.pc.addIceCandidate(candidate)
            } catch (err) {
              if (!ignoreOffer) throw err // Suprimir os candidatos da oferta ignorada
            }
          }
        } catch (err) {
          console.error(err)
        }
      }
    )

    this.start()
  }
}
