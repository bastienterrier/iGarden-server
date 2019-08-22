import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ToDoService } from '../todo/todo.service';
import { ToDoInterface } from '../todo/todo.interface';

@Controller('todos')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get('last')
  async getLastTask(): Promise<any> {
    return await this.toDoService.getLastTask();
  }

  @Post()
  async addTask(@Body() data: ToDoInterface): Promise<any> {
    return await this.toDoService.addTask(data);
  }

  @Get('all')
  getAllTask(): any {
    return this.toDoService.getAllTask();
  }

  @Patch(':title')
  async updateOneTask(@Param() params, @Body() data: any): Promise<any> {
    return await this.toDoService.updateOneTask(decodeURI(params.title), data);
  }
}
