import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserDb, UserDocument } from './schemas/user.schema'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdatePassDto } from './dto/update-pass.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { createHmac } from 'crypto'
import { User, uuid } from '@webrtc-comm/core'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserDb.name) private userModel: Model<UserDocument>
  ) {}

  async create({ pass, email, ...values }: CreateUserDto) {
    const byEmail = await this.findByEmail(email)

    if (byEmail) {
      throw new HttpException('Endereço de email em uso', HttpStatus.CONFLICT)
    }

    const data = { uuid: uuid(), pass: this.encrypt(pass), email, ...values }
    const user = new this.userModel(data)
    return user.save()
  }

  findAll() {
    return this.userModel.find().exec()
  }

  findById(id: ObjectId) {
    return this.userModel.findById(id).select('-pass')
  }

  findOne(query: Partial<Pick<User, 'email' | 'uuid'>>) {
    return this.userModel.findOne(query)
  }

  remove(id: ObjectId) {
    return this.userModel.findByIdAndRemove(id)
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ id }, updateUserDto)
  }

  async changePass(id: ObjectId, change: UpdatePassDto) {
    const user = await this.userModel.findById(id).select('pass')
    const pass = this.encrypt(change.pass)
    if (!(user.pass === pass)) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    return this.updatePass(id, change.newPass)
  }

  private updatePass(id: ObjectId, newPass: string) {
    const pass = this.encrypt(newPass)
    return this.userModel.updateOne({ id }, { pass })
  }

  public encrypt(pass: string) {
    return createHmac('sha256', pass).digest('hex')
  }

  async findByUuid(uuid: string): Promise<UserDb | undefined> {
    return this.userModel.findOne({ uuid })
  }

  async findByEmail(email: string): Promise<UserDb | undefined> {
    return this.userModel.findOne({ email })
  }

  async validateCredential(email: string, pass: string) {
    const user = await this.userModel.findOne({ email })
    return user.pass === this.encrypt(pass) ? user : null
  }
}
