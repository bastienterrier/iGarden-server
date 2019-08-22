import { Injectable } from '@nestjs/common';
import { CRUD } from '../database/crud';
import { User } from './settings.interface';

@Injectable()
export class SettingsService {
  constructor(private readonly crud: CRUD) {
    crud.connect();
  }
  async getAllUsers(): Promise<User[]> {
    return (await this.crud.readAll('users')) as User[];
  }
  async getUser(name: string): Promise<User> {
    return (await this.crud.findOne('users', { name })) as User;
  }
  async updateUser(name: string, changes: any): Promise<User> {
    return (await this.crud.updateData('users', { name }, changes)) as User;
  }
}
