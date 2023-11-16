import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdateServiceDto extends PartialType(CreateServiceDto) {

    @IsOptional()
    @IsString()
    url: string;

    @IsOptional()
    @IsNumber()
    id: number;


    @IsOptional()
    @IsOptional()
    Description: string;

}
