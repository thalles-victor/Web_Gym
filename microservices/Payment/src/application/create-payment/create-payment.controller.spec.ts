import { Test, TestingModule } from '@nestjs/testing';
import { CreatePaymentController } from './create-payment.controller';

describe('CreatePaymentController', () => {
  let controller: CreatePaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePaymentController],
    }).compile();

    controller = module.get<CreatePaymentController>(CreatePaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
