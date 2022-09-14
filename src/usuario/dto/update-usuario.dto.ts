import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsString,Length } from "class-validator";

export class UpdateUsuarioDto {
    @ApiProperty()
    @Length(3,8) //decorador @IsNotEmpty "no este vacio"
    @IsString()
    usuario:string;
}
