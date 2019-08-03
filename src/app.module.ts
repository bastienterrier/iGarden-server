import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';
import { CRUD } from './database/crud';
import { GardenController } from './controllers/garden.controller';
import { GardenService } from './garden/garden.service';

@Module({
  imports: [],
  controllers: [HensController, GardenController],
  providers: [HensService, GardenService, CRUD],
})
export class AppModule {}
