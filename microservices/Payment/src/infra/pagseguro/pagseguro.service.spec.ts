import { Test, TestingModule } from '@nestjs/testing';
import { PagseguroService } from './pagseguro.service';

describe('PagseguroService', () => {
  let service: PagseguroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagseguroService],
    }).compile();

    service = module.get<PagseguroService>(PagseguroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
