import { ApiProperty } from "@nestjs/swagger";

export class CreateImagenDto {

    @ApiProperty()
    mainImageUrl: string;
}
