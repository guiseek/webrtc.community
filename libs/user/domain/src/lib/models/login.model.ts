import { User } from '@quertc/core'

export type Login = Pick<User, 'email' | 'pass'>
