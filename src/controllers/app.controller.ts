import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getLastCollect(): any {
    return 'Hello world!';
  }
}
