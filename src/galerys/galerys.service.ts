import { Injectable } from '@nestjs/common';
import { CreateGaleryDto } from './dto/create-galery.dto';
import { UpdateGaleryDto } from './dto/update-galery.dto';

@Injectable()
export class GalerysService {
  create(createGaleryDto: CreateGaleryDto) {
    return 'This action adds a new galery';
  }

  findAll() {
    return `This action returns all galerys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} galery`;
  }

  update(id: number, updateGaleryDto: UpdateGaleryDto) {
    return `This action updates a #${id} galery`;
  }

  remove(id: number) {
    return `This action removes a #${id} galery`;
  }
}
