import { Observable } from "rxjs";

// export type Message =
//   & { description: RTCSessionDescription }
//   & { candidate: RTCIceCandidate }
//   & { start: boolean }

export interface IMessage {
  description?: RTCSessionDescription
  candidate?: RTCIceCandidate
  sender?: string
  start?: boolean
}
export interface ISignalingChannel {
  message$: Observable<IMessage>
  send(data: { description: RTCSessionDescription }): void
  send(data: { candidate: RTCIceCandidate }): void
  send(data: { start: boolean }): void
}
