import { Test, TestingModule } from '@nestjs/testing';
import { QueuingService } from './queuing.service';

describe('QueuingService', () => {
  let service: QueuingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueuingService],
    }).compile();

    service = module.get<QueuingService>(QueuingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
