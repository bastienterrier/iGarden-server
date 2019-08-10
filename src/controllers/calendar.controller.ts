import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CalendarService } from '../calendar/calendar.service';
import { CalendarCollect } from '../calendar/calendar.interface';

@Controller('calendars')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('last')
  async getLastCollect(): Promise<any> {
    return await this.calendarService.getLastCollect();
  }

  @Post()
  async addCalendarCollect(@Body() data: CalendarCollect): Promise<any> {
    return await this.calendarService.addCollect(data);
  }

  @Delete()
  async removeCalendarCollect(@Body() data: CalendarCollect): Promise<any> {
    return await this.calendarService.removeCollect(data);
  }

  @Get('all')
  getAllCollect(): any {
    return this.calendarService.getAllCollect();
  }
}
