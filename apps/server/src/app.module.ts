import { ApiGateway } from './api.gateway'
import { Module } from '@nestjs/common'
import { ChatGateway } from './chat.gateway'
import { AlertController, AlertGateway } from './alert'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/jwt-auth.guard'

@Module({
  providers: [
    ApiGateway,
    ChatGateway,
    AlertGateway,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [AlertController, AppController],
  imports: [AuthModule, UsersModule],
})
export class AppModule {}
