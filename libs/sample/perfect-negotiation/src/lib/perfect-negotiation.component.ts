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

// import { PerfectNegotiation } from './perfect-negotiation'
// import { SignalingChannel } from '@quertc/core'
// import { MediaService } from '@quertc/meeting'
// import { code } from '@quertc/controls'
// import { Subject } from 'rxjs'
// import {
//   AfterViewInit,
//   Component,
//   ElementRef,
//   OnDestroy,
//   ViewChild,
// } from '@angular/core'

// @Component({
//   selector: 'quertc-perfect-negotiation',
//   templateUrl: './perfect-negotiation.component.html',
//   styleUrls: ['./perfect-negotiation.component.scss'],
// })
// export class PerfectNegotiationComponent
//   extends PerfectNegotiation
//   implements AfterViewInit, OnDestroy {
//   active = new Subject<boolean>()
//   active$ = this.active.asObservable()

//   @ViewChild('selfView') selfViewRef: ElementRef<HTMLVideoElement>

//   @ViewChild('remoteView') remoteViewRef: ElementRef<HTMLVideoElement>

//   constructor(
//     protected signaling: SignalingChannel,
//     protected stream: MediaService
//   ) {
//     super(signaling, stream)
//   }

//   restart = async () => {
//     this.offerOptions.iceRestart = true
//     this.makeOffer(this.offerOptions)
//   }

//   ngAfterViewInit() {
//     this.sender = code()
//     this.selfView = this.selfViewRef.nativeElement
//     this.remoteView = this.remoteViewRef.nativeElement

//     this.pc = new RTCPeerConnection({
//       iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
//     })

//     this.dc = this.pc.createDataChannel('channel')

//     this.dc.addEventListener('open', () => {
//       console.log('OPEN')
//       window.setTimeout(() => {
//         this.dc.send('allloooww')
//       }, 3000)
//     })
//     this.dc.addEventListener('message', ({ data }) =>
//       console.log('MESSAGE 1: ', data)
//     )
//     this.dc.addEventListener('error', (err) => console.log('ERROR: ', err))
//     this.dc.addEventListener('close', () => console.log('CLOSE'))
//     this.dc.addEventListener('bufferedamountlow', (evt) =>
//       console.log('BUFFER: ', evt)
//     )

//     this.pc.addEventListener('datachannel', ({ channel }) => {
//       const receiveChannel = channel
//       receiveChannel.addEventListener('message', ({ data }) => {
//         console.log('MESSAGE 2: ', data);
//       })
//       receiveChannel.addEventListener('open', () => console.log('OPEN'))
//       receiveChannel.addEventListener('error', (err) => console.log('ERROR: ', err))
//       receiveChannel.addEventListener('close', () => console.log('CLOSE'))
//       this.receiver = receiveChannel
//     })

//     this.pc.addEventListener('track', ({ track, streams }) => {
//       // assim que a mídia para uma trilha remota chegar, mostre-a no elemento de vídeo remoto
//       track.addEventListener('unmute', () => {
//         this.setVideo(this.remoteView, streams)
//         this.active.next(true)
//       })
//     })

//     this.afterViewComplete()

//     this.start()
//   }
// }
