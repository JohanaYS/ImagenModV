import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import mongoose from "mongoose";
import { CreateImagenDto } from "src/imagen/dto/create-imagen.dto";

export class CreateCategoriaDto {

    @Exclude()
    id: mongoose.Types.ObjectId;
    
    @ApiProperty()
    @IsNotEmpty({message: 'El nombre de categoría no puede ir vacío'})
    @Length(3, 20)
    title: string;

}

