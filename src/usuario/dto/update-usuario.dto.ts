import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsString,Length } from "class-validator";

export class UpdateUsuarioDto {

    @ApiProperty()
    @Length(3,8) //decorador @IsNotEmpty "no este vacio"
    @IsString()
    usuario:string;

    @Exclude()
    clave:string;


}
