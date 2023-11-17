import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './companys/companys.module';
import { ServiceModule } from './services/services.module';
import { GalerysModule } from './galerys/galerys.module';
import { Galery } from './galerys/entities/galery.entity';
import { Company } from './companys/entities/company.entity';
import { Service } from './services/entities/service.entity';

@Module({
  imports: [
 
    ServiceModule,
    CompanyModule,
    GalerysModule,
   
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'admin',
      database:'project',
      entities: [Company,Service,Galery],
      autoLoadEntities: true,
      synchronize: true
    }),
    CompanyModule,
    ServiceModule,
    GalerysModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
