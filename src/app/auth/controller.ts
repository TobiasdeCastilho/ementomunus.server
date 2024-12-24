import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

const users = [
  {
    user: 'Tobias',
    password: '123',
  },
];

@Controller('auth')
export class AuthController {
  @Get('signin')
  signin(@Query() params: { user: string; password: string }) {
    if (
      !users.find(
        (user) => user.user === params.user && user.password == params.password,
      )
    )
      throw new HttpException(
        'Invalid user or password',
        HttpStatus.UNAUTHORIZED,
      );
  }

  @Put('signup')
  signup(
    @Body() body: { user: string; password: string },
    @Res() res: Response,
  ) {
    if (users.find((user) => user.user === body.user))
      throw new HttpException('User already registered', HttpStatus.CONFLICT);

    users.push({ ...body });

    res.status(HttpStatus.CREATED).send();
  }
}
