import { Module } from '@nestjs/common';
import { GalerysService } from './galerys.service';
import { GalerysController } from './galerys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Galery } from './entities/galery.entity';
import { CompanyModule } from 'src/companys/companys.module';

  

@Module({
  imports: [TypeOrmModule.forFeature([Galery]),CompanyModule],
  controllers: [GalerysController],
  providers: [GalerysService,CompanyModule],
  exports: [] 
})
export class GalerysModule {}
