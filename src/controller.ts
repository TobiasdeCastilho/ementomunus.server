import { Controller, Get, Head, Query } from '@nestjs/common';
import { AppService } from './service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  test(): string {
    return this.appService.getTestMessage();
  }
}
