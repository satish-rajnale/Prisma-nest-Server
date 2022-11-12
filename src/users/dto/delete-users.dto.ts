import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class DeleteUserResDTO {
    @ApiProperty()
    status: String;
}

export class DeleteUserReqDTO {
    @ApiProperty()
    @IsArray()
    delete_list: string[];
}