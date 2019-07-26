import { Controller, Get, Post, Body } from '@nestjs/common';
import { HensService } from '../hens/hens.service';
import { EggsCollect } from '../hens/hens.interface';

@Controller('hens')
export class HensController {
  constructor(private readonly hensService: HensService) {}

  @Get('last')
  async getLastCollect(): Promise<any> {
    return await this.hensService.getLastCollect();
  }

  @Post()
  async addHensCollect(@Body() data: EggsCollect): Promise<any> {
    return await this.hensService.addCollect(data);
  }

  @Get('all')
  getAllCollect(): any {
    return this.hensService.getAllCollect();
  }
}
