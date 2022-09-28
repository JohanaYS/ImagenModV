import { ApiProperty } from "@nestjs/swagger";
import { IsFQDN, IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateImagenDto {

    @ApiProperty()
    @IsNotEmpty({message:'No puede ir vacio'})
    @IsFQDN()
    mainImageUrl: string;

    @ApiProperty()
    autor: Usuario;
}
