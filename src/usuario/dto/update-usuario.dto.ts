import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsAlphanumeric, Length } from "class-validator";

export class UpdateUsuarioDto {

    @ApiProperty()
    @Length(3,20) //decorador @IsNotEmpty "no este vacio"
    @IsAlphanumeric()
    usuario:string;

    @Exclude()
    clave:string;


}
