
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './interfaces/User.interface';
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  private readonly Users: User[] = [];

  create(User: User) {
    this.Users.push(User);
  }

  async findAll() {
    const users = await prisma.user.findMany();
    return users;
  }
}