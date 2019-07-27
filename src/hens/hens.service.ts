import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { EggsCollect } from './hens.interface';

@Injectable()
export class HensService {
  constructor(private readonly crud: CRUD) {
    crud.connect();
  }
  async getLastCollect(): Promise<any> {
    return await this.crud.readLast('hens');
  }
  async addCollect(data: EggsCollect): Promise<any> {
    return await this.crud.writeData('hens', data);
  }
  async getAllCollect(): Promise<any> {
    return await this.crud.readAll('hens');
  }
}
