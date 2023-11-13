import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Company} from 'src/companys/entities/company.entity';


@Entity()
export class Galery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;


  @ManyToOne(() => Company, company => company.services)
  company: Company;

}