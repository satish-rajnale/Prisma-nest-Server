import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Body,
  Put,
  Delete,
} from "@nestjs/common";
import {  Request } from "express";
import { CreateUserDTO, CreateUserResDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiCreatedResponse } from "@nestjs/swagger";
import {  UpdateUserReqDTO } from "./dto/update-user.dto";
import { DeleteUserReqDTO, DeleteUserResDTO } from "./dto/delete-users.dto";
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
  update(@Body() request: UpdateUserReqDTO) {
    const {id, name, email, role} = request
    const user = this.usersService.update(id, name, email, role);
    return user;
  }

  @Delete()
  @ApiCreatedResponse({ type: DeleteUserResDTO })
  delete(@Body() request: DeleteUserReqDTO) {
    const { delete_list } = request
    const status = this.usersService.delete(delete_list);
    return status;
  }
}
