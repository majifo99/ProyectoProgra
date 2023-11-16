import { PartialType } from '@nestjs/mapped-types';
import { CreateGaleryDto } from './create-galery.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class UpdateGaleryDto extends PartialType(CreateGaleryDto) {

    @IsOptional()
    @IsNumber()
    id: number

    @IsOptional()
    @IsString()
    url: string;


}
