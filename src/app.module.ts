import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';
import { CRUD } from './database/crud';
import { GardenController } from './controllers/garden.controller';
import { GardenService } from './garden/garden.service';
import { AppController } from './controllers/app.controller';
import { CalendarController } from './controllers/calendar.controller';
import { CalendarService } from './calendar/calendar.service';

@Module({
  imports: [],
  controllers: [
    HensController,
    GardenController,
    AppController,
    CalendarController,
  ],
  providers: [HensService, GardenService, CalendarService, CRUD],
})
export class AppModule {}
