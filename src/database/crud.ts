import { remoteHens, remoteGarden } from './models';
import { connection } from './connection';

export class CRUD {
  private readonly remoteHens;
  private readonly remoteGarden;

  constructor() {
    this.remoteHens = remoteHens;
    this.remoteGarden = remoteGarden;
  }

  private getModel(source: string) {
    switch (source) {
      case 'hens':
        return this.remoteHens;
      case 'gardens':
        return this.remoteGarden;
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
}
