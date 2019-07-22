import { Module } from '@nestjs/common';
import { HensController } from './controllers/hens.controller';
import { HensService } from './hens/hens.service';
import { CRUD } from './database/crud';

@Module({
  imports: [],
  controllers: [HensController],
  providers: [HensService, CRUD],
})
export class AppModule {}
