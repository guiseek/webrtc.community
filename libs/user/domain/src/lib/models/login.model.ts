import { User } from '@webrtc-comm/core'

export type Login = Pick<User, 'email' | 'pass'>
