import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

/* Project */
import { PrismaService } from 'src/services/prisma.service';
import { AuthController } from './main/auth.controller';
import { AuthService } from './main/auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      privateKey: process.env.JWT_SECRET,
      signOptions: { expiresIn: '4h' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService]
})
export class AuthModule {}

