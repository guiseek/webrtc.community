import { ISignalingChannel, IMessage } from './signaling-channel.interface'
import * as io from 'socket.io-client'
import { Subject } from 'rxjs'

export class SignalingChannel implements ISignalingChannel {
  io: SocketIOClient.Socket

  private message = new Subject<IMessage>()
  message$ = this.message.asObservable()

  constructor(uri: string) {
    console.log({ uri });

    if (uri) {
      this.io = io.connect(uri)
      this.io.on('message', (evt: IMessage) => this.message.next(evt))
    }
  }

  send(data: IMessage): void {
    this.io.send(data)
  }
}
