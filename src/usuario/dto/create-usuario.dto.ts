import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, Length } from "class-validator";


export class CreateUsuarioDto {
    
    @ApiProperty()
    @Length(3,20) //decorador @IsNotEmpty "no este vacio"
    @IsAlphanumeric()
    usuario:string;

    @ApiProperty()
    @Length(5,40) //decorador longitud entre 1 y 10 caracteres
    clave:string;


    @ApiProperty()
    rol:string;

    
    @ApiProperty()
    activo: boolean;

}
