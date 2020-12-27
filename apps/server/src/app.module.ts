import { mongooseFactory } from './config/mongoose.factory'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiGateway } from './api.gateway'
import { ChatGateway } from './chat/chat.gateway'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  providers: [ApiGateway, ChatGateway],
  controllers: [AppController],
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
