import { Controller, Get, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { User } from "./interfaces/User.interface";
import { UsersService } from "./users.service"
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  findAll(@Req() request: Request){
    return this.usersService.findAll()
    // return "This action returns all users";
  }

  @Post()
  @HttpCode(204)
  create() {
    return "This action adds a new cat";
  }
}
