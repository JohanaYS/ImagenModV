import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { Imagen, ImagenDocument } from './entities/imagen.entity';

@Injectable()
export class ImagenService {
  constructor(@InjectModel('imagen') private readonly imagenModel: Model<ImagenDocument>) { }


  //CREAR
  async createImagen(createImagenDto: CreateImagenDto): Promise<Imagen> {
    return (await this.imagenModel.create(createImagenDto));
  }
  
  //BUSCAR TODOS
  async findAll(): Promise<Imagen[]> {
    const imagenAll= await this.imagenModel.find()
    return imagenAll;
  }

  //BUSCAR UNO
  async findOne(id: string): Promise<Imagen> {
    const imagenid = await this.imagenModel.findById(id);
    if (!imagenid){
      throw new BadRequestException('No encontrado')
    }
    return imagenid;
  }

  //ACTUALIZAR
  async update(id: string, updateImagenDto: UpdateImagenDto) {
    const imagenid = await this.imagenModel.findByIdAndUpdate(id, updateImagenDto).setOptions({new:true});
    if (!imagenid){
      throw new NotFoundException('No se realizo')
    }
    return imagenid
  }

  //ELIMINAR
  async delete(id:string): Promise<Imagen> {
    return await this.imagenModel.findByIdAndDelete(id);
  }
}
