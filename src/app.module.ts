import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';

@Module({
  imports: [],
  controllers: [HensController],
  providers: [HensService],
})
export class AppModule {}
