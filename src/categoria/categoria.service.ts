import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria, CategoriaDocument } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(@InjectModel('categoria') private readonly categoriaModel: Model<CategoriaDocument>) { }


  //CREAR
  async createImagen(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return (await this.categoriaModel.create(createCategoriaDto));
  }
  
  //BUSCAR TODOS
  async findAll(): Promise<Categoria[]> {
    const categoriaAll= await this.categoriaModel.find()
    return categoriaAll;
  }

  //BUSCAR UNO
  async findOne(id: string): Promise<Categoria> {
    const categoriaid = await this.categoriaModel.findById(id);
    if (!categoriaid){
      throw new BadRequestException('No encontrado')
    }
    return categoriaid;
  }

  //ACTUALIZAR
  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    const categoriaid = await this.categoriaModel.findByIdAndUpdate(id, updateCategoriaDto).setOptions({new:true});
    if (!categoriaid){
      throw new NotFoundException('No se realizo')
    }
    return categoriaid;
  }

  //ELIMINAR
  async delete(id:string): Promise<Categoria> {
    return await this.categoriaModel.findByIdAndDelete(id);
  }
}
