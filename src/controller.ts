import { Controller, Get, Head, Query } from '@nestjs/common';
import { AppService } from './service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
