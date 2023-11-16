import { IsOptional, IsString } from "class-validator";

export class CreateServiceDto {

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