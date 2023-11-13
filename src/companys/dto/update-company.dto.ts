import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) { 
    
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsOptional()
  id: number;
}