import { ApiProperty } from "@nestjs/swagger";
import { ROLE, User } from "@prisma/client";
import { IsArray, IsJSON } from "class-validator";
import { IBid } from "../interfaces/User.interface";
import {BidItem} from "./create-user.dto"

export class UpdateUserDTO {
  
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: ROLE;
    @ApiProperty()
    role: ROLE;
    @ApiProperty()
    @IsJSON()
    qualifications: {};
    @ApiProperty({ type: BidItem })
    @IsArray()
    createdBids?: IBid[];
    @ApiProperty({ type: BidItem })
    @IsArray()
    votedBids?: BidItem[];
  }
