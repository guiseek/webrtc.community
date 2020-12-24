import { Test, TestingModule } from '@nestjs/testing'
import { AlertGateway } from './alert.gateway'

describe('AlertGateway', () => {
  let gateway: AlertGateway

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertGateway],
    }).compile()

    gateway = module.get<AlertGateway>(AlertGateway)
  })

  it('should be defined', () => {
    expect(gateway).toBeDefined()
  })
})
