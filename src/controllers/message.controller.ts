import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from '../message/message.service';
import { MessageInterface } from '../message/message.interface';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('all')
  async getAllMessages(): Promise<any[]> {
    return await this.messageService.getAllMessage();
  }

  @Post()
  async addMessage(@Body() message: MessageInterface): Promise<any> {
    return await this.messageService.addMessage(message);
  }
}
