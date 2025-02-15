import { Body, Controller, Get, Put } from '@nestjs/common';

/* Project */
import * as AuthRequest from '../../../../types/api/request/auth.request';
import { ZodPipe } from '../../../pipes/zod.pipe';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Get()
  async login(
    @Body(new ZodPipe(AuthRequest.Login))
    req: AuthRequest.Login
  ) {
    return this.auth.login(req);
  }

  @Get('/forgot')
  forgot(@Body(new ZodPipe(AuthRequest.Forgot)) req: AuthRequest.Forgot) {
    return this.auth.forgot(req);
  }
}

