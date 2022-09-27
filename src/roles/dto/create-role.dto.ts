import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import mongoose from "mongoose";

export class CreateRoleDto {

    @Exclude()
    id: mongoose.Types.ObjectId;
    
    @ApiProperty()
    @IsNotEmpty({message: 'El nombre de categoría no puede ir vacío'})
    @Length(3, 20)
    title: string;
}
