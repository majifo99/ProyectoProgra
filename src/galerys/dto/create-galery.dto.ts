import { IsOptional, IsString } from 'class-validator';

export class CreateGaleryDto {

    @IsOptional()
    @IsString()
     url: string;


    @IsOptional()
    @IsString()
    Description: string;

    @IsOptional()
    @IsString()
    id: number;

}