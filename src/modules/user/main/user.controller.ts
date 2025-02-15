import { Body, Controller, Get, Patch, Put } from '@nestjs/common';

/* Project */
import { ZodPipe } from '../../../pipes/zod.pipe';
import { UserService } from './user.service';
import * as UserRequest from '../../../../types/api/request/user.request';
import { Authorized } from 'src/decorators/authorized.decorator';
import { Blocked } from 'src/decorators/blocked.decorator';

@Authorized()
@Controller('/user')
export class UserController {
  constructor(private readonly auth: UserService) {}

  @Put('/register')
  async register(
    @Body(new ZodPipe(UserRequest.Register)) payload: any
  ): Promise<void> {
    return this.auth.register(payload);
  }

  @Blocked('NotImplemented')
  @Authorized()
  @Patch('/confirm')
  async confirm(
    @Body(new ZodPipe(UserRequest.Confirm)) payload: any
  ): Promise<void> {
    return this.auth.confirm(payload);
  }
}

