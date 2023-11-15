import {BadRequestException, Injectable } from '@nestjs/common';
import { CreateGaleryDto } from './dto/create-galery.dto';
import { UpdateGaleryDto } from './dto/update-galery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/companys/entities/company.entity';
import { Galery } from './entities/galery.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GalerysService {
  constructor( @InjectRepository(Galery)
  private GaleryRepository: Repository<Galery>,

  @InjectRepository(Company)
  private CompanyRepository: Repository<Company>
  
  ) {}
  
  
 async create(createGaleryDto: CreateGaleryDto) {
  const company = await this.CompanyRepository.findOneBy({id: createGaleryDto.company_id});
  if (!company){

    throw new BadRequestException('company not found');
  }

  const product = this.GaleryRepository.create({
  ...createGaleryDto,
  company
  });
  return await this.GaleryRepository.save(galery);
 }
  

 async findAll() {
    return await this.GaleryRepository.find();
  }

  async findOne(id: number) {
   return await this.GaleryRepository.findOneBy({ id });
  }

  async update(id: number, updateGaleryDto: UpdateGaleryDto) {
    const galery = await this.GaleryRepository.findOneBy({ id });
    if (!galery) {

      throw new BadRequestException(' Product not found');
    }
    let company;
    if (updateGaleryDto.company_id) {
      company = await this.CompanyRepository.findOneBy({ id: updateGaleryDto.company_id });
      if (!company) {
        throw new BadRequestException('company not found');
      }
    }
    const updatedGalery = this.GaleryRepository.merge(galery, {
      ...updateGaleryDto,
      company
    });
    return await this.GaleryRepository.save(updatedGalery);
  }

  async remove(id: number) {
    const galery = await this.GaleryRepository.findOneBy({ id });
    if (!galery) {
      throw new BadRequestException('galery not found');
    }
    await this.GaleryRepository.delete(id);
    return `galery #${id} deleted successfully`;
  }

}
