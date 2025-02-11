import { Module } from '@nestjs/common';

/* Project */
import { PrismaService } from 'src/services/prisma.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService]
})
export class AuthModule {}

