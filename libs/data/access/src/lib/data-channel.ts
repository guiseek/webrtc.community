import { fromEvent, Observable } from "rxjs"

export class DataChannel {
  pc: RTCPeerConnection
  dc: RTCDataChannel

  open$: Observable<string>
  message$: Observable<string>
  constructor(
    pcConfig: RTCConfiguration,
    channel: string = 'channel',
    dcConfig?: RTCDataChannelInit
  ) {
    this.pc = new RTCPeerConnection(pcConfig)
    this.dc = this.pc.createDataChannel(channel, dcConfig)
    this.pc.addEventListener('icecandidate', console.log)
    this.open$ = fromEvent<string>(this.dc, 'open')
    this.message$ = fromEvent<string>(this.dc, 'message')
  }
}
