import { ApiProperty, PartialType } from '@nestjs/swagger';


export class UpdateImagenDto {
    
    @ApiProperty()
    mainImageUrl: string;
}
