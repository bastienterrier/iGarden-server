import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { CalendarCollect } from './calendar.interface';

@Injectable()
export class CalendarService {
  constructor(private readonly crud: CRUD) {}
  async getLastCollect(): Promise<any> {
    return await this.crud.readLast('calendars');
  }
  async addCollect(data: CalendarCollect): Promise<any> {
    return await this.crud.writeData('calendars', data);
  }
  async getAllCollect(): Promise<any> {
    return await this.crud.readAll('calendars');
  }
  async removeCollect(data: CalendarCollect): Promise<any> {
    return await this.crud.removeData('calendars', data);
  }
}
