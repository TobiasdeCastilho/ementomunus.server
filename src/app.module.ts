import { Module } from '@nestjs/common';

/* Project */
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { QuestModule } from './modules/quest/quest.module';

@Module({
  imports: [AuthModule, UserModule, QuestModule],
  providers: [PrismaService, JwtService]
})
export class AppModule {}

