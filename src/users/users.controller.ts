import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Body,
  Put,
} from "@nestjs/common";
import { ErrorRequestHandler, Request } from "express";
import { CreateUserDTO, CreateUserResDTO } from "./dto/create-user.dto";
import { User } from "./interfaces/User.interface";
import { UsersService } from "./users.service";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { UpdateUserDTO } from "./dto/update-user.dto";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get("all")
  findAll(@Req() request: Request) {
    return this.usersService.findAll();
    // return "This action returns all users";
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ type: CreateUserResDTO })
  create(@Body() request: CreateUserDTO) {
    try {
      const user = this.usersService.create(request);
      return user;
    } catch (e) {
      console.log("error", e);
    }
  }

  @Put()
  @ApiCreatedResponse({ type: CreateUserResDTO })
  update(@Body() request: UpdateUserDTO) {
    const user = this.usersService.create(request);
    return user;
  }
}
