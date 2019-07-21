import { Controller, Get } from '@nestjs/common';
import { HensService } from '../hens/hens.service';

@Controller('hens')
export class HensController {
  constructor(private readonly hensService: HensService) {}

  @Get('last')
  getLastCollect(): any {
    return this.hensService.getLastCollect();
  }

  @Get('all')
  getAllCollect(): any {
    return this.hensService.getAllCollect();
  }
}
