import { Controller, Get, HttpCode, Post, Req, Body } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDTO, CreateUserResDTO } from "./dto/create-user.dto";
import { User } from "./interfaces/User.interface";
import { UsersService } from "./users.service"
import { ApiCreatedResponse } from "@nestjs/swagger";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  findAll(@Req() request: Request){
    return this.usersService.findAll()
    // return "This action returns all users";
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({type: CreateUserResDTO})
  create(@Body() request: CreateUserDTO) {
    console.log(request)
    const user = this.usersService.create(request)
    return user;
  }
}
