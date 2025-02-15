import { Injectable } from '@nestjs/common';
import { APIException } from 'src/utils/exceptions.utils';
import { EXCEPTIONS } from 'types/utils/exceptions';

/* Project */
import { PrismaService } from '../../../services/prisma.service';
import { hashSync } from 'bcrypt-ts';
import { Blocked } from 'src/decorators/blocked.decorator';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async confirm(payload: {
    firstName: string;
    lastName: string;
  }): Promise<void> {}

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
        password: hashSync(payload.password, 10)
      }
    });
  }
}

