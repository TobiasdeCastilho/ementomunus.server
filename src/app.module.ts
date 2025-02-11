import { Module } from '@nestjs/common';

/* Project */
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [PrismaService, JwtService]
})
export class AppModule {}

