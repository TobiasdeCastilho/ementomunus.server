/* Project */
import { PrismaService } from 'src/services/prisma.service';
import { SubquestController } from './subquest/subquest.controller';
import { SubquestService } from './subquest/subquest.service';
import { QuestController } from './main/quest.controller';
import { QuestService } from './main/quest.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [QuestController, SubquestController],
  providers: [PrismaService, QuestService, SubquestService],
  exports: [QuestService, SubquestService]
})
export class QuestModule {}

