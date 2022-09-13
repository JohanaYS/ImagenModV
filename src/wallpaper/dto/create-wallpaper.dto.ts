import { ApiProperty } from '@nestjs/swagger';

export class CreateWallpaperDto {

    @ApiProperty({type: Number,})
    idwallpaper:number;
    @ApiProperty()
    nombre: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    dimensiones: string;
    @ApiProperty()
    usuario: string;
}