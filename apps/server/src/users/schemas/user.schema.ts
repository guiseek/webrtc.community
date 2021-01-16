import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, ObjectId } from 'mongoose'
import { City, User } from '@webrtc-comm/core'

export type UserDocument = UserDb & Document

@Schema({
  id: true,
  collection: 'users',
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})
export class UserDb implements User {
  _id: string

  @Prop(String)
  uuid: string

  @Prop(String)
  name: string

  @Prop(String)
  email: string

  @Prop(String)
  pass: string

  @Prop(Date)
  created: Date

  @Prop(Date)
  updated: Date
}

export const UserSchema = SchemaFactory.createForClass(UserDb)
