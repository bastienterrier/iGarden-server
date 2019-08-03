import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';
import { CRUD } from './database/crud';
import { GardenController } from './controllers/garden.controller';
import { GardenService } from './garden/garden.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [],
  controllers: [HensController, GardenController, AppController],
  providers: [HensService, GardenService, CRUD],
})
export class AppModule {}
