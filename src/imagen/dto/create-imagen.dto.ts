import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateImagenDto {

    @ApiProperty()
    @IsNotEmpty({message:'No puede ir vacio'})
    mainImageUrl: string;

    @ApiProperty()
    usuario: Usuario;

}
