import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { Logger } from '@nestjs/common'

export interface Presence {
  code: string
  rooms: string[]
  nickname: string
  available: boolean
}

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server

  private logger: Logger = new Logger('ChatGateway')

  clients = new Map<string, Record<string, Presence>[]>([])

  afterInit(server: any) {
    this.logger.log('Initialized!')
  }

  @SubscribeMessage('chatToServer')
  handleMessage(
    client: Socket,
    message: { sender: string; room: string; message: string }
  ) {
    this.wss.to(message.room).emit('chatToClient', message)
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string) {
    console.log('room: ', room)
    client.join(room)
    client.emit('joinedRoom', room)
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, room: string) {
    client.leave(room)
    client.emit('leftRoom', room)
  }
}
