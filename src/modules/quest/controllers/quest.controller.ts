import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

/* Project */
import { Authorized } from 'src/decorators/authorized.decorator';
import { QuestService } from '../services/quest.service';

@Authorized()
@Controller('/quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @Post()
  async create(@Body() data: any) {
    return this.questService.create(data);
  }

  @Get()
  async findAll() {
    return this.questService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.questService.findOne(id);
  }
}

