import { Test, TestingModule } from '@nestjs/testing';
import { GetAllService } from './get-all.service';

describe('GetAllService', () => {
  let service: GetAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllService],
    }).compile();

    service = module.get<GetAllService>(GetAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
