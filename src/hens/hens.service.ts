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
  getAllCollect(): any {
    return [
      {
        date: '20/07/2019',
        number: 5,
        picker: 'Cyril',
      },
      {
        date: '18/07/2019',
        number: 4,
        picker: 'Bastien',
      },
      {
        date: '27/07/2019',
        number: 4,
        picker: 'Cyril',
      },
    ];
  }
}
