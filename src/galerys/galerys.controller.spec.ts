import { Test, TestingModule } from '@nestjs/testing';
import { GalerysController } from './galerys.controller';
import { GalerysService } from './galerys.service';

describe('GalerysController', () => {
  let controller: GalerysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalerysController],
      providers: [GalerysService],
    }).compile();

    controller = module.get<GalerysController>(GalerysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
