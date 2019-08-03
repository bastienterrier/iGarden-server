import { Controller, Get, Post, Body } from '@nestjs/common';
import { GardenCollect } from 'src/garden/garden.interface';
import { GardenService } from 'src/garden/garden.service';

@Controller()
export class AppController {
  @Get('')
  getLastCollect(): any {
    return 'Hello world!';
  }
}
