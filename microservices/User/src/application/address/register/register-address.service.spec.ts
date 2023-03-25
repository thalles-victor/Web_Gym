import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAddressService } from './register-address.service';

describe('RegisteAddressService', () => {
  let service: RegisterAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterAddressService],
    }).compile();

    service = module.get<RegisterAddressService>(RegisterAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
