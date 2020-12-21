import { ApiGateway } from './api.gateway'
import { Module } from '@nestjs/common'

@Module({
  providers: [ApiGateway],
})
export class AppModule {}
