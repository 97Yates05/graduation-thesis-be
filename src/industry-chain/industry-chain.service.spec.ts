import { Test, TestingModule } from '@nestjs/testing';
import { IndustryChainService } from './industry-chain.service';

describe('IndustryChainService', () => {
  let service: IndustryChainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndustryChainService],
    }).compile();

    service = module.get<IndustryChainService>(IndustryChainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
