import { MediaService } from '@webrtc-comm/meeting'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'comm-screen-share',
  templateUrl: './screen-share.component.html',
  styleUrls: ['./screen-share.component.scss'],
})
export class ScreenShareComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>
  canvas: HTMLCanvasElement

  @ViewChild('video') videoRef: ElementRef<HTMLVideoElement>
  video: HTMLVideoElement

  pc1: RTCPeerConnection
  pc2: RTCPeerConnection

  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  startTime: number | null

  constructor(private mediaService: MediaService) {}

  async ngOnInit() {
    //
  }
  async onScreen() {
    const stream = await this.mediaService.getDisplayMedia()
    console.log(stream)
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement
    this.video = this.videoRef.nativeElement
    this.video.addEventListener('loadedmetadata', function () {
      console.log(
        `Remote video videoWidth: ${this.videoWidth}px,  videoHeight: ${this.videoHeight}px`
      )
    })

    this.video.onresize = () => {
      console.log(
        `Remote video size changed to ${this.video.videoWidth}x${this.video.videoHeight}`
      )
      // We'll use the first onsize callback as an indication that video has started
      // playing out.
      if (this.startTime) {
        const elapsedTime = window.performance.now() - this.startTime
        console.log(`Setup time: ${elapsedTime.toFixed(3)}ms`)
        this.startTime = null
      }
    }
  }

  async call() {
    console.log('Starting call')
    this.startTime = window.performance.now()
    const stream = await this.mediaService.getDisplayMedia()
    this.mediaService.currentStream = stream
    console.log(stream)
    const videoTracks = stream.getVideoTracks()
    const audioTracks = stream.getAudioTracks()
    if (videoTracks.length > 0) {
      console.log(`Using video device: ${videoTracks[0].label}`)
    }
    if (audioTracks.length > 0) {
      console.log(`Using audio device: ${audioTracks[0].label}`)
    }
    const servers = {
      iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    }
    this.pc1 = new RTCPeerConnection(servers)
    console.log('Created local peer connection object pc1')
    this.pc1.onicecandidate = (e) => this.onIceCandidate(this.pc1, e)
    this.pc2 = new RTCPeerConnection(servers)
    console.log('Created remote peer connection object this.pc2')
    this.pc2.onicecandidate = (e) => this.onIceCandidate(this.pc2, e)
    this.pc1.oniceconnectionstatechange = (e) =>
      this.onIceStateChange(this.pc1, e as any)
    this.pc2.oniceconnectionstatechange = (e) =>
      this.onIceStateChange(this.pc2, e as any)
    this.pc2.ontrack = this.gotRemoteStream

    this.mediaService.currentStream.getTracks().forEach((track) => {
      this.pc1.addTrack(track, this.mediaService.currentStream)
    })
    console.log('Added local stream to pc1')

    console.log('pc1 createOffer start')
    this.pc1
      .createOffer(this.offerOptions)
      .then((o) => this.onCreateOfferSuccess(o))
      .catch((e) => this.onCreateSessionDescriptionError(e))
  }

  onCreateSessionDescriptionError(error: object) {
    console.log(`Failed to create session description: ${error.toString()}`)
  }
  onCreateOfferSuccess(desc: RTCSessionDescriptionInit) {
    console.log(`Offer from pc1\n${desc.sdp}`)
    console.log('pc1 setLocalDescription start')
    this.pc1
      .setLocalDescription(desc)
      .then(
        () => this.onSetLocalSuccess(this.pc1),
        this.onSetSessionDescriptionError
      )
    console.log('pc2 setRemoteDescription start')
    this.pc2
      .setRemoteDescription(desc)
      .then(
        () => this.onSetRemoteSuccess(this.pc2),
        this.onSetSessionDescriptionError
      )
    console.log('pc2 createAnswer start')
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    this.pc2
      .createAnswer()
      .then((a) => this.onCreateAnswerSuccess(a))
      .catch(this.onCreateSessionDescriptionError)
  }

  onSetLocalSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} setLocalDescription complete`)
  }

  onSetRemoteSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} setRemoteDescription complete`)
  }

  onSetSessionDescriptionError = (error: object) => {
    console.log(`Failed to set session description: ${error.toString()}`)
  }

  gotRemoteStream = (e: RTCTrackEvent) => {
    if (this.video.srcObject !== e.streams[0]) {
      this.video.srcObject = e.streams[0]
      console.log('pc2 received remote stream')
    }
  }

  onCreateAnswerSuccess = (desc: RTCSessionDescriptionInit) => {
    console.log(`Answer from pc2:\n${desc.sdp}`)
    console.log('pc2 setLocalDescription start')
    this.pc2
      .setLocalDescription(desc)
      .then(() => this.onSetLocalSuccess(this.pc2))
      .catch(this.onSetSessionDescriptionError)
    console.log('this.pc1 setRemoteDescription start')
    this.pc1
      .setRemoteDescription(desc)
      .then(() => this.onSetRemoteSuccess(this.pc1))
      .catch(this.onSetSessionDescriptionError)
  }

  onIceCandidate = (
    pc: RTCPeerConnection,
    { candidate }: RTCPeerConnectionIceEvent
  ) => {
    if (candidate) {
      this.getOtherPc(pc)
        .addIceCandidate(candidate)
        .then(
          () => this.onAddIceCandidateSuccess(pc),
          (err) => this.onAddIceCandidateError(pc, err)
        )
    }
    console.log(
      `${this.getName(pc)} ICE candidate: ${
        candidate ? candidate.candidate : '(null)'
      }`
    )
  }

  onAddIceCandidateSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} addIceCandidate success`)
  }

  onAddIceCandidateError = (pc: RTCPeerConnection, error: object) => {
    console.log(
      `${this.getName(pc)} failed to add ICE Candidate: ${error.toString()}`
    )
  }

  onIceStateChange = (
    pc: RTCPeerConnection,
    event: RTCIceCandidatePairChangedEvent
  ) => {
    if (pc) {
      console.log(`${this.getName(pc)} ICE state: ${pc.iceConnectionState}`)
      console.log('ICE state change event: ', event)
    }
  }

  getName = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? 'pc1' : 'pc2'
  }

  getOtherPc = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? this.pc2 : this.pc1
  }
}
