import { Test, TestingModule } from '@nestjs/testing';
import { ApiGateway } from './api.gateway';

describe('ApiGateway', () => {
  let gateway: ApiGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiGateway],
    }).compile();

    gateway = module.get<ApiGateway>(ApiGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
