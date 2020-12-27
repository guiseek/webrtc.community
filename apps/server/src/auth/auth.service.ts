import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User } from '@quertc/core'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const { pass, ...record } = await this.usersService.findOne({ email })
    password = this.usersService.encrypt(password)
    return record && pass === password ? record : null
  }

  async login(user: User) {
    const payload = { name: user.name, sub: user.uuid }
    return {
      access_token: this.jwtService.sign(payload),
      payload,
    }
  }

  async signup(user: CreateUserDto) {
    return this.usersService.create(user)
  }
}
