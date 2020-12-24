import { ApiGateway } from './api.gateway'
import { Module } from '@nestjs/common'
import { ChatGateway } from './chat.gateway'
import { AlertController, AlertGateway } from './alert'

@Module({
  providers: [ApiGateway, ChatGateway, AlertGateway],
  controllers: [AlertController],
})
export class AppModule {}
