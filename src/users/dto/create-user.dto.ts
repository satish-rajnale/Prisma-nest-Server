import { ApiProperty } from "@nestjs/swagger";
import { ROLE, User } from "@prisma/client";
import { IsArray, IsJSON } from "class-validator";
import { IBid } from "../interfaces/User.interface";

export class BidItem {
  @ApiProperty()
  id: string;
  @ApiProperty()
  rating: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  owner: User;
  @ApiProperty()
  ownerId: String;
  @ApiProperty()
  votedBy?: User;
  @ApiProperty()
  votedById?: string;
}

export class CreateUserDTO {
  
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: ROLE;
    @ApiProperty()
    role: ROLE;
    @ApiProperty()
    @IsJSON()
    qualifications: {};
  
  }

export class CreateUserResDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  role: ROLE;
  @ApiProperty()
  @IsJSON()
  qualifications?: {};
  @ApiProperty({ type: BidItem })
  @IsArray()
  createdBids?: IBid[];
  @ApiProperty({ type: BidItem })
  @IsArray()
  votedBids?: BidItem[];
}
