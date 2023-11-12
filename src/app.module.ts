import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanysModule } from './companys/companys.module';
import { ServicesModule } from './services/services.module';
import { GalerysModule } from './galerys/galerys.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'123456',
      database:'many',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    CompanysModule,
    ServicesModule,
    GalerysModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
