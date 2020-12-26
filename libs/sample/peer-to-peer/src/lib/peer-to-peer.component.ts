import { OverlogService } from '@quertc/overlog'
import { Subject, Subscription } from 'rxjs'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { SignalingChannel } from '@quertc/core'
import { MediaService } from '@quertc/meeting'

@Component({
  selector: 'quertc-peer-to-peer',
  templateUrl: './peer-to-peer.component.html',
  styleUrls: ['./peer-to-peer.component.scss'],
})
export class PeerToPeerComponent implements AfterViewInit, OnDestroy {
  constraints = { audio: true, video: true }
  pc: RTCPeerConnection

  active = new Subject<boolean>()
  active$ = this.active.asObservable()
  subs: Subscription

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
    private overlog: OverlogService,
    public stream: MediaService
  ) {}

  ngAfterViewInit() {
    this.selfView = this.selfViewRef.nativeElement
    this.remoteView = this.remoteViewRef.nativeElement

    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    })

    // send any ice candidates to the other peer
    this.pc.addEventListener('icecandidate', ({ candidate }) => {
      if (candidate) {
        this.signaling.send({ candidate })
      }
    })

    // let the "negotiationneeded" event trigger offer generation
    this.pc.onnegotiationneeded = async () => {
      try {
        await this.pc.setLocalDescription(
          await this.pc.createOffer(this.offerOptions)
        )
        // send the offer to the other peer
        if (this.pc.localDescription) {
          this.signaling.send({ description: this.pc.localDescription })
        }
      } catch (err) {
        console.error(err)
      }
    }

    this.pc.ontrack = ({ track, streams }) => {
      // once media for a remote track arrives, show it in the remote video element
      track.onunmute = () => {
        // don't set srcObject again if it is already set.
        if (this.remoteView.srcObject) {
          return
        }
        this.remoteView.srcObject = streams[0]
        // this.active.next(true)
      }
    }

    this.subs = this.signaling.message$.subscribe(
      async ({ sender, description, candidate }) => {
        try {
          if (description) {
            await this.pc.setRemoteDescription(description)
            // if we got an offer, we need to reply with an answer
            if (description.type == 'offer') {
              if (!this.selfView.srcObject) {
                // blocks negotiation on permission (not recommended in production code)
                await this.addCameraMic()
              }
              await this.pc.setLocalDescription(await this.pc.createAnswer())
              if (this.pc.localDescription) {
                this.signaling.send({ description: this.pc.localDescription })
              }
            }
          } else if (candidate) {
            await this.pc.addIceCandidate(candidate)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )

    this.start()
  }

  // call start() to initiate
  start = () => {
    this.addCameraMic()
  }

  // add camera and microphone to connection
  addCameraMic = async () => {
    try {
      // get a local stream, show it in a self-view and add it to be sent
      this.stream.currentStream = await this.stream.getUserMedia(
        this.constraints
      )
      for (const track of this.stream.currentStream.getTracks()) {
        this.pc.addTrack(track, this.stream.currentStream)
      }
      this.selfView.srcObject = this.stream.currentStream
    } catch (err) {
      console.error(err)
    }
  }
  hangup() {
    this.overlog.show({ text: 'Ending call' })
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
