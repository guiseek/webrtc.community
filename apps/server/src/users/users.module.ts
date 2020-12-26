import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserSchema, UserDb } from './schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserDb.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
