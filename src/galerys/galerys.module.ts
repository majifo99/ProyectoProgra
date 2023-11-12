import { Module } from '@nestjs/common';
import { GalerysService } from './galerys.service';
import { GalerysController } from './galerys.controller';

@Module({
  controllers: [GalerysController],
  providers: [GalerysService],
})
export class GalerysModule {}
