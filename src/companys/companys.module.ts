import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { CompanysController } from './companys.controller';
import { CompanyService } from './companys.service';
 


@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanysController],
  providers: [CompanyService],
})
export class CompanyModule {}