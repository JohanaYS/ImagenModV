import { Module } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { ImagenController } from './imagen.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagenSchema } from './entities/imagen.entity';

@Module({
  imports: [MongooseModule.forFeature([
    { 
      name: "imagen", 
      schema: ImagenSchema 
    }
  ])
],
  controllers: [ImagenController],
  providers: [ImagenService]
})
export class ImagenModule {}
