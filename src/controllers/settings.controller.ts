import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { SettingsService } from '../settings/settings.service';
import { User } from '../settings/settings.interface';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('users')
  async getUsers(): Promise<any> {
    return await this.settingsService.getAllUsers();
  }

  @Get('users/:name')
  async getUser(@Param() params): Promise<User> {
    return await this.settingsService.getUser(params.name);
  }

  @Patch('users/:name')
  async updateUser(@Param() params, @Body() data: any): Promise<any> {
    return await this.settingsService.updateUser(params.name, data);
  }
}
