import { Controller, Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { CompanyModule } from 'src/companys/companys.module';


@Module({
  imports: [TypeOrmModule.forFeature([Service]),CompanyModule],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports:[]

})
export class ServiceModule {}
