import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateCategoriaDto {

    @Exclude()
    _id: string;

    @ApiProperty()
    @IsNotEmpty({message: 'El nombre de categoría no puede ir vacío'})
    @Length(3, 20)
    title: string;

}
