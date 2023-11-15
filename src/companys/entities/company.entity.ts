import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Galery } from 'src/galerys/entities/galery.entity';
import { Service } from 'src/services/entities/service.entity';

@Entity()

export class Company {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
    
    @Column()
    description: string;
  
    @OneToMany(() => Galery, galery => galery.company)
    products: Galery[];
  
    @OneToMany(() => Service, service => service.company)
    services: Service[];

}
