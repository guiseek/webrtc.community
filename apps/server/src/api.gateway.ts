import { Logger } from '@nestjs/common'
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway()
export class ApiGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('ApiGateway')

  clients = new Map<string, string>([])

  @SubscribeMessage('clients')
  handleClients(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    client.emit('clients', this.clients)
    return data
  }

  @SubscribeMessage('message')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    client.broadcast.send(data)
    return data
  }

  afterInit(server: any) {
    this.logger.log('Initialized')
  }
  handleConnection(client: Socket, id: string) {
    this.logger.debug('id: ', id)
  }
  handleDisconnect(client: Socket) {
    this.logger.debug('id: ', client.id)
    // throw new Error('Method not implemented.')
  }
}
