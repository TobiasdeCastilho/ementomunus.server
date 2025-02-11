import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as Prisma from '@prisma/client';
import bcrypt from 'bcrypt';

/* Project */
import { EXCEPTIONS } from 'types/utils/exceptions';
import { APIException } from '../../../utils/exceptions.utils';
import { PrismaService } from '../../../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

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

    if (!user || user.password !== payload.password)
      throw new APIException(EXCEPTIONS.USER_OR_PASSWORD_INCORRECT);

    return this.getToken(user);
  }

  async register(payload: {
    username: string;
    email: string;
    password: string;
  }): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email }
    });

    if (user) throw new APIException(EXCEPTIONS.USER_ALREADY_EXISTS);

    await this.prisma.user.create({
      data: {
        username: payload.username,
        email: payload.email,
        password: bcrypt.hashSync(payload.password, 10)
      }
    });
  }

  forgot(payload: { email: string; password: string }): string {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }
}

