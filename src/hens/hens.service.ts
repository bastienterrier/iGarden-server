import { Injectable } from '@nestjs/common';

@Injectable()
export class HensService {
  getLastCollect(): any {
    return {
      date: '2019-07-20T14:50:05.121Z',
      number: 5,
      picker: 'Cyril',
    };
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
