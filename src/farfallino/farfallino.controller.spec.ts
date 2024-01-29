import { Test, TestingModule } from '@nestjs/testing';
import { FarfallinoController } from './farfallino.controller';

describe('FarfallinoController', () => {
  let controller: FarfallinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarfallinoController],
    }).compile();

    controller = module.get<FarfallinoController>(FarfallinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
