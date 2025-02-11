import { Body, Controller, Get, Param, Post } from '@nestjs/common';

/* Project */
import { Authorized } from 'src/decorators/authorized.decorator';
import { SubquestService } from './subquest.service';

@Authorized()
@Controller('/quest/:questId/subquest')
export class SubquestController {
  constructor(private readonly subquestService: SubquestService) {}

  @Post()
  async create(@Param('questId') questId: string, @Body() data: any) {
    return this.subquestService.create(questId, data);
  }

  @Get()
  async findAll(@Param('questId') questId: string) {
    return this.subquestService.findAll(questId);
  }
}

