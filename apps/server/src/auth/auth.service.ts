import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User } from '@webrtc-comm/core'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    return this.usersService.validateCredential(email, pass)
  }

  async login(user: User) {
    const payload = { name: user.name, sub: user.uuid, id: user._id }
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    }
  }

  async signup(user: CreateUserDto) {
    return this.usersService.create(user)
  }
}
