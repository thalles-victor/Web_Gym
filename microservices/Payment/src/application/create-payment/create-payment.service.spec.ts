import { Test, TestingModule } from '@nestjs/testing';
import { CreatePaymentService } from './create-payment.service';

describe('CreatePaymentService', () => {
  let service: CreatePaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePaymentService],
    }).compile();

    service = module.get<CreatePaymentService>(CreatePaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
