import { Module } from '@nestjs/common';

/* Project */
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [AuthModule],
  providers: [PrismaService, JwtService]
})
export class AppModule {}

