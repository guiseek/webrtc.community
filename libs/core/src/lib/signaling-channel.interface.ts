import { Observable } from "rxjs";
export interface IMessage {
  description?: RTCSessionDescription
  candidate?: RTCIceCandidate
  sender?: string
  start?: boolean
}
export interface ISignalingChannel {
  message$: Observable<IMessage>
  send(data: IMessage): void
}
