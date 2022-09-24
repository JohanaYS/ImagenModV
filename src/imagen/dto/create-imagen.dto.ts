import { ApiProperty } from "@nestjs/swagger";

export class CreateImagenDto {

    @ApiProperty()
    title: string;

    @ApiProperty()
    mainImageUrl: string;
}
