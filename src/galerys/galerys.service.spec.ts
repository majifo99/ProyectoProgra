import { Test, TestingModule } from '@nestjs/testing';
import { GalerysService } from './galerys.service';

describe('GalerysService', () => {
  let service: GalerysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalerysService],
    }).compile();

    service = module.get<GalerysService>(GalerysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
