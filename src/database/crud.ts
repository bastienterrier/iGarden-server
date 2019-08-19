import { remoteHens, remoteGarden, remoteCalendar } from './models';
import { connection } from './connection';
import { CalendarCollect } from 'src/calendar/calendar.interface';

export class CRUD {
  private readonly remoteHens;
  private readonly remoteGarden;
  private readonly remoteCalendar;

  constructor() {
    this.remoteHens = remoteHens;
    this.remoteGarden = remoteGarden;
    this.remoteCalendar = remoteCalendar;
  }

  private getModel(source: string) {
    switch (source) {
      case 'hens':
        return this.remoteHens;
      case 'gardens':
        return this.remoteGarden;
      case 'calendars':
        return this.remoteCalendar;
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
}
