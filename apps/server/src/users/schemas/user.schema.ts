import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { City, User } from '@quertc/core'

export type UserDocument = UserDb & Document

@Schema({
  id: true,
  collection: 'users',
  validateBeforeSave: true,
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})
export class UserDb implements User {
  @Prop(String)
  uuid: string

  @Prop(String)
  name: string

  @Prop(String)
  email: string

  @Prop(String)
  pass: string

  @Prop(City)
  city: City

  @Prop(Date)
  created: Date

  @Prop(Date)
  updated: Date
}

export const UserSchema = SchemaFactory.createForClass(UserDb)
