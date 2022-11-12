import { ApiProperty } from "@nestjs/swagger";
import { ROLE} from "@prisma/client";
import {  IsJSON } from "class-validator";


export class UpdateUserReqDTO {
    @ApiProperty()
    id: string;
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
