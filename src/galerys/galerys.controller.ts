import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GalerysService } from './galerys.service';
import { CreateGaleryDto } from './dto/create-galery.dto';
import { UpdateGaleryDto } from './dto/update-galery.dto';

@Controller('galerys')
export class GalerysController {
  constructor(private readonly galerysService: GalerysService) {}

  @Post()
  create(@Body() createGaleryDto: CreateGaleryDto) {
    return this.galerysService.create(createGaleryDto);
  }

  @Get()
  findAll() {
    return this.galerysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.galerysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGaleryDto: UpdateGaleryDto) {
    return this.galerysService.update(id, updateGaleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.galerysService.remove(id);
  }
}
