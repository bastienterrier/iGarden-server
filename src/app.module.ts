import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';
import { CRUD } from './database/crud';
import { GardenController } from './controllers/garden.controller';
import { GardenService } from './garden/garden.service';
import { AppController } from './controllers/app.controller';
import { CalendarController } from './controllers/calendar.controller';
import { CalendarService } from './calendar/calendar.service';
import { ToDoController } from './controllers/todo.controller';
import { ToDoService } from './todo/todo.service';
import { SettingsController } from './controllers/settings.controller';
import { SettingsService } from './settings/settings.service';
import { MessageController } from './controllers/message.controller';
import { MessageService } from './message/message.service';

@Module({
  imports: [],
  controllers: [
    HensController,
    GardenController,
    AppController,
    CalendarController,
    ToDoController,
    SettingsController,
    MessageController,
  ],
  providers: [
    HensService,
    GardenService,
    CalendarService,
    ToDoService,
    SettingsService,
    MessageService,
    CRUD,
  ],
})
export class AppModule {}
