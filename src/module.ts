import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import { AuthController } from './app/auth/controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
