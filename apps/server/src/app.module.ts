import { mongooseFactory } from './config/mongoose.factory'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiGateway } from './api.gateway'
import { ChatGateway } from './chat.gateway'
import { AlertController, AlertGateway } from './alert'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  providers: [ApiGateway, ChatGateway, AlertGateway],
  controllers: [AlertController, AppController],
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: mongooseFactory,
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
