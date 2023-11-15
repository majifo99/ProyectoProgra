import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGaleryDto } from './dto/create-galery.dto';
import { UpdateGaleryDto } from './dto/update-galery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Galery } from './entities/galery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GalerysService {
  constructor(
    @InjectRepository(Galery)
    private GaleryRepository: Repository<Galery>,
  ) {}

  async create(createGaleryDto: CreateGaleryDto) {
    const addedGalery = this.GaleryRepository.create(createGaleryDto);
    await this.GaleryRepository.save(addedGalery);
    return addedGalery;
  }

  async findAll() {
    return await this.GaleryRepository.find();
  }

  async findOne(id: number) {
    const galery = await this.GaleryRepository.findOne({ where: { id } });
    if (!galery) {
      throw new BadRequestException('Galery not found');
    }
    return galery;
  }

  async update(id: number, updateGaleryDto: UpdateGaleryDto) {
    const existingGalery = await this.GaleryRepository.findOne({where:{id}});
    if (!existingGalery) {
      throw new BadRequestException('Galery not found');
    }

   

    return await this.GaleryRepository.save(existingGalery);
  }

  async remove(id: number) {
    const existingGalery = await this.GaleryRepository.findOne({where:{id}});
    if (!existingGalery) {
      throw new BadRequestException('Galery not found');
    }



    return await this.GaleryRepository.remove(existingGalery);
  }
}
