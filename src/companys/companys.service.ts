// company.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

async getCompayWithChildre(id: number){
return this.companyRepository.createQueryBuilder('company') 
.where('company.id =: companyId',{'companyId' : id})
.leftJoin('company.gallery','galerys') 
.leftJoin('company.services','services') 
.getOne()
}

async create(createCompanyDto: CreateCompanyDto){
  const company = this.companyRepository.create(createCompanyDto);
  return await this.companyRepository.save(company);

}


  findAll() {
    return this.companyRepository.find();
  }

 async findOne(id: number) {
    return await this.companyRepository.findOne({where: {id},relations:['galerys', 'services']});
  }

 

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyRepository.update(id,updateCompanyDto);
  }

  async remove(id: number) {
    return await this.companyRepository.delete(id);
  }
}
