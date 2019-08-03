import { Controller, Get, Post, Body } from '@nestjs/common';
import { GardenCollect } from '../garden/garden.interface';
import { GardenService } from '../garden/garden.service';

@Controller('gardens')
export class GardenController {
  constructor(private readonly gardenService: GardenService) {}

  @Get('last')
  async getLastCollect(): Promise<any> {
    return await this.gardenService.getLastCollect();
  }

  @Post()
  async addGardenCollect(@Body() data: GardenCollect): Promise<any> {
    return await this.gardenService.addCollect(data);
  }

  @Get('all')
  getAllCollect(): any {
    return this.gardenService.getAllCollect();
  }
}
