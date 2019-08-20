import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { ToDoInterface } from './todo.interface';

@Injectable()
export class ToDoService {
  constructor(private readonly crud: CRUD) {
    crud.connect();
  }
  async getLastTask(): Promise<any> {
    return await this.crud.readLast('todos');
  }
  async addTask(data: ToDoInterface): Promise<any> {
    return await this.crud.writeData('todos', data);
  }
  async getAllTask(): Promise<any> {
    return await this.crud.readAll('todos');
  }
  async updateOneTask(key: string, data: any): Promise<any> {
    return await this.crud.updateData('todos', { title: key }, data);
  }
}
