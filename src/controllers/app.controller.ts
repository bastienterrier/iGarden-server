import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getLastCollect(): any {
    return '<b>iGarden</b> server is running!';
  }
}
