import { Module } from '@nestjs/common';

/* Project */
import { PrismaService } from 'src/services/prisma.service';
import { UserController } from './main/user.controller';
import { UserService } from './main/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService]
})
export class UserModule {}

