import {
  remoteHens,
  remoteGarden,
  remoteCalendar,
  remoteTodo,
  remoteUser,
} from './models';
import { connection } from './connection';

export class CRUD {
  private readonly remoteHens;
  private readonly remoteGarden;
  private readonly remoteCalendar;
  private readonly remoteTodo;
  private readonly remoteUser;

  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  constructor() {
    this.remoteHens = remoteHens;
    this.remoteGarden = remoteGarden;
    this.remoteCalendar = remoteCalendar;
    this.remoteTodo = remoteTodo;
    this.remoteUser = remoteUser;
  }

  private getModel(source: string) {
    switch (source) {
      case 'hens':
        return this.remoteHens;
      case 'gardens':
        return this.remoteGarden;
      case 'calendars':
        return this.remoteCalendar;
      case 'todos':
        return this.remoteTodo;
      case 'users':
        return this.remoteUser;
      default:
        return null;
    }
  }

  async connect(): Promise<void> {
    return await connection(process.env.MONGODB_CONNECTION_STRING)
      .then(_ => {
        // tslint:disable-next-line: no-console
        console.log('Connected to Mongodb!');
      })
      .catch(err => {
        // tslint:disable-next-line: no-console
        console.log(err);
      });
  }

  async readLast(source: string): Promise<any> {
    const model = this.getModel(source);

    return await model
      .findOne({}, '-_id -__v')
      .sort({ date: -1 })
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  }

  async readAll(source: string): Promise<any> {
    const model = this.getModel(source);

    return await model
      .find({}, '-_id -__v')
      .sort({ date: -1 })
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  }

  async writeData(source: string, data: any): Promise<any> {
    const model = this.getModel(source);

    return await model
      .insertMany([data])
      .then(res => res)
      .catch(err => err);
  }

  async removeData(source: string, data: any): Promise<any> {
    const model = this.getModel(source);

    return await model
      .deleteOne(data)
      .then(res => res)
      .catch(err => err);
  }

  async findOne(source: string, data: any): Promise<any> {
    const model = this.getModel(source);

    return await model
      .findOne(data, '-_id -__v')
      .then(res => res)
      .catch(err => err);
  }

  async updateData(source: string, key: any, newData: any): Promise<any> {
    const model = this.getModel(source);

    return await model
      .updateOne(key, newData)
      .then(res => res)
      .catch(err => err);
  }
}
