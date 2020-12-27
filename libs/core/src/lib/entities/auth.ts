import { User } from './user'

export class Auth {
  email: string
  pass: string
}

export type AuthLogin = Pick<User, 'email' | 'pass'>

export type AuthPayload = Omit<User, 'pass' | 'city' | 'created' | 'updated'>

export interface AuthResponse {
  access_token: string
  payload: AuthPayload
}
