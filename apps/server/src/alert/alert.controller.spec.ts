import { AlertGateway } from './alert.gateway'
import { Test, TestingModule } from '@nestjs/testing'
import { AlertController } from './alert.controller'

describe('AlertController', () => {
  let controller: AlertController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertController],
      providers: [AlertGateway],
    }).compile()

    controller = module.get<AlertController>(AlertController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
