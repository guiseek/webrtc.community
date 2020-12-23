import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import { Logger, PeerState, PeerStats } from '@quertc/core'
import { OverlogService } from '@quertc/overlog'
import { BehaviorSubject } from 'rxjs'

type WithTarget<T = any> = Event & {
  target: T
}

const console = Logger
@Component({
  selector: 'app-restart-ice',
  templateUrl: './restart-ice.component.html',
  styleUrls: ['./restart-ice.component.scss'],
})
export class RestartIceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('localVideo') localVideoRef: ElementRef<HTMLVideoElement>
  localVideo: HTMLVideoElement

  localCandidate: PeerStats
  remoteCandidate: PeerStats

  @ViewChild('remoteVideo') remoteVideoRef: ElementRef<HTMLVideoElement>
  remoteVideo: HTMLVideoElement

  startTime: number

  localStream: MediaStream
  pc1: RTCPeerConnection
  pc2: RTCPeerConnection
  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  private _startButton = new BehaviorSubject<boolean>(false)
  public startButton$ = this._startButton.asObservable()
  private _callButton = new BehaviorSubject<boolean>(true)
  public callButton$ = this._callButton.asObservable()
  private _restartButton = new BehaviorSubject<boolean>(true)
  public restartButton$ = this._restartButton.asObservable()
  private _hangupButton = new BehaviorSubject<boolean>(true)
  public hangupButton$ = this._hangupButton.asObservable()

  constructor(private overlog: OverlogService) {}

  ngAfterViewInit(): void {
    this.localVideo = this.localVideoRef.nativeElement
    this.remoteVideo = this.remoteVideoRef.nativeElement

    this.localVideo.addEventListener(
      'loadedmetadata',
      ({ target }: WithTarget<HTMLVideoElement>) => {
        Logger.log(`Local video: ${target.videoWidth}x${target.videoHeight}px`)
      }
    )

    this.remoteVideo.addEventListener(
      'loadedmetadata',
      ({ target }: WithTarget<HTMLVideoElement>) => {
        console.log(
          `Remote video: ${target.videoWidth}x${target.videoHeight}px`
        )
      }
    )

    this.remoteVideo.onresize = () => {
      console.log(
        `Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}px`
      )
      // Usaremos o primeiro retorno de chamada do tamanho como uma
      // indicação de que o vídeo começou a ser reproduzido.
      if (this.startTime) {
        const elapsedTime = window.performance.now() - this.startTime
        console.log(`Setup time: ${elapsedTime.toFixed(3)}ms`)
        this.startTime = null
        // Execute essas funções novamente para obter os relatórios getStats()
        // com o tipo candidatePair e preencher os elementos de identificação do candidato.
        this.checkStats(this.pc1)
        this.checkStats(this.pc2)
      }
    }
  }

  getName = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? 'pc1' : 'pc2'
  }

  getOtherPc = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? this.pc2 : this.pc1
  }

  gotStream = (stream: MediaStream) => {
    console.log('Received local stream')
    this.localVideo.srcObject = stream
    this.localStream = stream
    this._callButton.next(false)
  }

  start = () => {
    console.log('Requesting local stream')
    this._startButton.next(true)
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then(this.gotStream)
      .catch((e) => alert(`getUserMedia() error: ${e.name}`))
  }

  // Simula um reinício de gelo.
  restart = () => {
    this._restartButton.next(true)
    this.offerOptions.iceRestart = true
    this.overlog.show({ text: 'pc1 createOffer restart' })
    this.pc1
      .createOffer(this.offerOptions)
      .then(this.onCreateOfferSuccess, this.onCreateSessionDescriptionError)
  }

  call = () => {
    this._callButton.next(true)
    this._hangupButton.next(false)
    console.log('Starting call')
    this.startTime = window.performance.now()
    const videoTracks = this.localStream.getVideoTracks()
    const audioTracks = this.localStream.getAudioTracks()
    if (videoTracks.length > 0) {
      console.log(`Using video device: ${videoTracks[0].label}`)
    }
    if (audioTracks.length > 0) {
      console.log(`Using audio device: ${audioTracks[0].label}`)
    }
    const servers = null
    this.pc1 = this.pc1 = new RTCPeerConnection(servers)
    console.log('Created local peer connection object this.pc1')
    this.pc1.onicecandidate = (e) => this.onIceCandidate(this.pc1, e)
    this.pc2 = this.pc2 = new RTCPeerConnection(servers)
    console.log('Created remote peer connection object this.pc2')
    this.pc2.onicecandidate = (e) => this.onIceCandidate(this.pc2, e)
    this.pc1.oniceconnectionstatechange = (e) => {
      this.onIceStateChange(this.pc1, e)
      if (this.pc1 && this.pc1.iceConnectionState === PeerState.Connected) {
        this._restartButton.next(false)
      }
    }
    this.pc2.oniceconnectionstatechange = (e) =>
      this.onIceStateChange(this.pc2, e)
    this.pc2.ontrack = this.gotRemoteStream

    this.localStream
      .getTracks()
      .forEach((track) => this.pc1.addTrack(track, this.localStream))
    console.log('Added local stream to this.pc1')

    this.overlog.show({ text: 'this.pc1 createOffer start' })
    this.pc1
      .createOffer(this.offerOptions)
      .then(this.onCreateOfferSuccess, this.onCreateSessionDescriptionError)
  }

  onCreateSessionDescriptionError = (error: { toString: () => any }) => {
    console.log(`Failed to create session description: ${error.toString()}`)
  }

  onCreateOfferSuccess = (desc: RTCSessionDescription) => {
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
    // Como o lado 'remoto' não tem fluxo de mídia, precisamos
    // para passar as restrições certas para que ele
    // aceitar a oferta de áudio e vídeo.
    this.pc2
      .createAnswer()
      .then(this.onCreateAnswerSuccess, this.onCreateSessionDescriptionError)
  }

  onSetLocalSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} setLocalDescription complete`)
  }

  onSetRemoteSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} setRemoteDescription complete`)
  }

  onSetSessionDescriptionError = (error: Error) => {
    console.log(`Failed to set session description: ${error.toString()}`)
  }

  gotRemoteStream = (e: RTCTrackEvent) => {
    if (this.remoteVideo.srcObject !== e.streams[0]) {
      this.remoteVideo.srcObject = e.streams[0]
      this.overlog.show({ text: 'pc2 received remote stream' })
    }
  }

  onCreateAnswerSuccess = (desc: RTCSessionDescriptionInit) => {
    console.log(`Answer from pc2:\n${desc.sdp}`)
    console.log('pc2 setLocalDescription start')
    this.pc2
      .setLocalDescription(desc)
      .then(
        () => this.onSetLocalSuccess(this.pc2),
        this.onSetSessionDescriptionError
      )
    console.log('pc1 setRemoteDescription start')
    this.pc1
      .setRemoteDescription(desc)
      .then(
        () => this.onSetRemoteSuccess(this.pc1),
        this.onSetSessionDescriptionError
      )
  }

  onIceCandidate = (
    pc: RTCPeerConnection,
    event: { candidate: RTCIceCandidateInit | RTCIceCandidate }
  ) => {
    if (event.candidate) {
      this.getOtherPc(pc)
        .addIceCandidate(event.candidate)
        .then(
          () => this.onAddIceCandidateSuccess(pc),
          (err) => this.onAddIceCandidateError(pc, err)
        )
      console.log(
        `${this.getName(pc)} ICE candidate: \n${
          event.candidate ? event.candidate.candidate : '(null)'
        }`
      )
    }
  }

  onAddIceCandidateSuccess = (pc: RTCPeerConnection) => {
    console.log(`${this.getName(pc)} addIceCandidate success`)
  }

  onAddIceCandidateError = (
    pc: RTCPeerConnection,
    error: { toString: () => any }
  ) => {
    console.log(
      `${this.getName(pc)} failed to add ICE Candidate: ${error.toString()}`
    )
  }

  onIceStateChange = (pc: RTCPeerConnection, event: any) => {
    if (pc) {
      console.log(`${this.getName(pc)} ICE state: ${pc.iceConnectionState}`)
      console.log('ICE state change event: ', event)
      // TODO: livre-se disso em favor de http://w3c.github.io/webrtc-pc/#widl-RTCIceTransport-onselectedcandidatepairchange
      if (
        pc.iceConnectionState === PeerState.Connected ||
        pc.iceConnectionState === PeerState.Completed
      ) {
        this.checkStats(pc)
      }
    }
  }

  checkStats = (pc: RTCPeerConnection) => {
    pc.getStats(null).then((results) => {
      // descobrir o ip do par
      let activeCandidatePair = null
      let remoteCandidate = null

      // Procure o par candidato, primeiro o caminho da especificação.
      results.forEach((report: RTCTransportStats) => {
        if (report.type === 'transport') {
          activeCandidatePair = results.get(report.selectedCandidatePairId)
        }
      })
      // Fallback para Firefox.
      if (!activeCandidatePair) {
        results.forEach((report) => {
          if (
            report.type === 'candidate-pair' &&
            report.state === 'succeeded' &&
            report.selected
          ) {
            activeCandidatePair = report
          }
        })
      }
      if (activeCandidatePair && activeCandidatePair.remoteCandidateId) {
        results.forEach((report) => {
          if (
            report.type === 'remote-candidate' &&
            report.id === activeCandidatePair.remoteCandidateId
          ) {
            remoteCandidate = report
          }
        })
      }
      if (remoteCandidate && remoteCandidate.id) {
        if (pc === this.pc1) {
          this.localCandidate = remoteCandidate
        } else {
          this.remoteCandidate = remoteCandidate
        }
      }
    })
  }

  hangup() {
    this.overlog.show({ text: 'Ending call' })
    this.pc1.close()
    this.pc2.close()
    this.pc1 = null
    this.pc2 = null
    this._hangupButton.next(true)
    this._restartButton.next(true)
    this._callButton.next(false)
  }

  ngOnDestroy() {
    if (this.localStream) {
      this.localStream.getTracks().forEach((t) => t.stop())
    }
  }
}
