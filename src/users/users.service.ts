import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { User } from "./interfaces/User.interface";
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  private readonly Users: User[] = [];

  async create(User: User) {
    const user = await prisma.user.create({
      data: User,
      //include here will return all the above data on creation with the selected fields inside include
      include : {
      createdBids : true,
      votedBids: true,
      },

      //select here will return only the selected fields inside select
      // select: {
      //   createdBids: true,
      //   votedBids: true,
      // },
    });

    // this.Users.push(user);
    return user;
  }

  async findAll() {
    const users = await prisma.user.findMany();
    return users;
  }
}
