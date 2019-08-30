import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { GardenCollect } from './garden.interface';

@Injectable()
export class GardenService {
  constructor(private readonly crud: CRUD) {}
  async getLastCollect(): Promise<any> {
    return await this.crud.readLast('gardens');
  }
  async addCollect(data: GardenCollect): Promise<any> {
    return await this.crud.writeData('gardens', data);
  }
  async getAllCollect(): Promise<any> {
    return await this.crud.readAll('gardens');
  }
}
