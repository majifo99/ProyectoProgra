// service.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Company } from "src/companys/entities/company.entity"

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  description: string;

  @ManyToOne(() => Company, company => company.services)
  company: Company;
}
