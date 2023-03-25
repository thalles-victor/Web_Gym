import { Test, TestingModule } from '@nestjs/testing';
import { GetAllController } from './get-all.controller';

describe('GetAllController', () => {
  let controller: GetAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllController],
    }).compile();

    controller = module.get<GetAllController>(GetAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
