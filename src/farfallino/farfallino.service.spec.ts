import { Test, TestingModule } from '@nestjs/testing';
import { FarfallinoService } from './farfallino.service';

describe('FarfallinoService', () => {
  let service: FarfallinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarfallinoService],
    }).compile();

    service = module.get<FarfallinoService>(FarfallinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
