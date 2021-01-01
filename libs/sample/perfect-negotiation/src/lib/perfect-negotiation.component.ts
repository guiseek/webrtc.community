import { PerfectNegotiation } from './perfect-negotiation'
import { SignalingChannel } from '@quertc/core'
import { MediaService } from '@quertc/meeting'
import { code } from '@quertc/controls'
import { Subject } from 'rxjs'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'quertc-perfect-negotiation',
  templateUrl: './perfect-negotiation.component.html',
  styleUrls: ['./perfect-negotiation.component.scss'],
})
export class PerfectNegotiationComponent
  extends PerfectNegotiation
  implements AfterViewInit, OnDestroy {
  active = new Subject<boolean>()
  active$ = this.active.asObservable()

  @ViewChild('selfView') selfViewRef: ElementRef<HTMLVideoElement>

  @ViewChild('remoteView') remoteViewRef: ElementRef<HTMLVideoElement>

  constructor(
    protected signaling: SignalingChannel,
    protected stream: MediaService
  ) {
    super(signaling, stream)
  }

  restart = async () => {
    this.offerOptions.iceRestart = true
    this.makeOffer(this.offerOptions)
  }

  ngAfterViewInit() {
    this.sender = code()
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

    this.afterViewComplete()

    this.start()
  }
}
