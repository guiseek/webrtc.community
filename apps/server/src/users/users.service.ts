import { Injectable } from '@nestjs/common'

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'demo',
      password: '1234',
    },
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
