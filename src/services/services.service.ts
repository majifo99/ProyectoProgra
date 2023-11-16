import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { throws } from 'assert';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private ServiceRepository: Repository<Service>,
    ) {  }

  async create(createServiceDto: CreateServiceDto) {
    const company = await this.ServiceRepository.findOneBy({ id: createServiceDto.id});
    if (!company) {
    
      throw new BadRequestException('company not found');
    }

    const service = this.ServiceRepository.create({
    ...createServiceDto, company})

    return  await this.ServiceRepository.save(service);
    }

  async findAll() {
    return await  this.ServiceRepository.find();
  }

  async findOne(id: number) {
    const service = await this.ServiceRepository.findOne({ where: { id } });
    if (!service) {
    throw new BadRequestException( 'Service not found');
    }
    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await this.ServiceRepository.findOne({ where: { id: id } });
    if (!service) {
      throw new BadRequestException(' Service not found');
    }

    let company;
    if (updateServiceDto.id) {
      company = await this.ServiceRepository.findOneBy({ id: updateServiceDto.id });
    if (!company) {
      throw new BadRequestException('company not found');
    }
  }

  const updatedService = this.ServiceRepository.merge(service, {
  ...updateServiceDto,
  company
  });
return await this.ServiceRepository.save(updatedService);
}


  async remove(id: number) {
    const existingService = await this.ServiceRepository.findOne({ where: { id } });
    if (!existingService) {
    throw new BadRequestException( ' Service not found');
    }
    return await this.ServiceRepository.remove(existingService);
  }


}
