import { Controller, Get, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("users")
export class UsersController {
  @Get()
  findAll(@Req() request: Request): string {
    return "This action returns all users";
  }

  @Post()
  @HttpCode(204)
  create() {
    return "This action adds a new cat";
  }
}
