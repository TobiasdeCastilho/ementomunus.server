import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controller';
import { AppService } from './service';
import { AuthController } from './app/auth/controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, AuthController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Server says Hi"', () => {
      expect(appController.test()).toBe('Server says Hi');
    });
  });
});
