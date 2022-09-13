import { PartialType } from '@nestjs/swagger';
import { CreateWallpaperDto } from './create-wallpaper.dto';

export class UpdateWallpaperDto extends PartialType(CreateWallpaperDto) {}
