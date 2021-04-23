import { Test, TestingModule } from '@nestjs/testing';
import { IndustryChainController } from './industry-chain.controller';

describe('IndustryChainController', () => {
  let controller: IndustryChainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndustryChainController],
    }).compile();

    controller = module.get<IndustryChainController>(IndustryChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
