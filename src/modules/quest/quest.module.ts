/* Project */
import { PrismaService } from 'src/services/prisma.service';
import { SubquestController } from './subquest/controllers/subquest.controller';
import { SubquestService } from './subquest/services/subquest.service';
import { QuestController } from './controllers/quest.controller';
import { QuestService } from './services/quest.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [QuestController, SubquestController],
  providers: [PrismaService, QuestService, SubquestService],
  exports: [QuestService, SubquestService]
})
export class QuestModule {}

