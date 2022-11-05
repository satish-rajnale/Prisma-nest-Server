
import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/User.interface';

@Injectable()
export class UsersService {
  private readonly Users: IUser[] = [];

  create(User: IUser) {
    this.Users.push(User);
  }

  findAll(): IUser[] {
    return this.Users;
  }
}