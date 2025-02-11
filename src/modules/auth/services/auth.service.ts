import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as Prisma from '@prisma/client';
import { compareSync } from 'bcrypt-ts';

/* Project */
import { EXCEPTIONS } from 'types/utils/exceptions';
import { PrismaService } from '../../../services/prisma.service';
import { APIException } from '../../../utils/exceptions.utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) {}

  private async getToken(user: Prisma.User): Promise<{ token: string }> {
    const token = this.jwt.sign({ name: user.username, email: user.email });
    return { token };
  }

  async login(payload: {
    email: string;
    password: string;
  }): Promise<{ token: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email }
    });

    if (!user || !compareSync(payload.password, user.password))
      throw new APIException(EXCEPTIONS.USER_OR_PASSWORD_INCORRECT);

    return this.getToken(user);
  }

  forgot(payload: { email: string; password: string }): string {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}

