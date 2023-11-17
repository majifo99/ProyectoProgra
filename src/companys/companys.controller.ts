import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './companys.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Controller('companys')
export class CompanysController {
  constructor(private readonly companysService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companysService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companysService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Company> {
    return this.companysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companysService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.companysService.remove(id);
  }
}
