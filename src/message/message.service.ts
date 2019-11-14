import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { MessageInterface } from './message.interface';

@Injectable()
export class MessageService {
  constructor(private readonly crud: CRUD) {}
  async addMessage(data: MessageInterface): Promise<any> {
    return await this.crud.writeData('messages', data);
  }
  async getAllMessage(): Promise<any> {
    return await this.crud.readAll('messages');
  }
}
