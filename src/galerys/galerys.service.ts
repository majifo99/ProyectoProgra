import { Injectable } from '@nestjs/common';
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
  
  
 async 

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
