import { Test, TestingModule } from '@nestjs/testing';
import { CompanysController } from './companys.controller';
import { CompanyService } from './companys.service';

describe('CompanysController', () => {
  let controller: CompanysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanysController],
      providers: [CompanyService],
    }).compile();

    controller = module.get<CompanysController>(CompanysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
