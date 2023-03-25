import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAddressController } from './register-address.controller';

describe('RegisterController', () => {
  let controller: RegisterAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterAddressController],
    }).compile();

    controller = module.get<RegisterAddressController>(
      RegisterAddressController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
