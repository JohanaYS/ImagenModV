import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Usuario } from './entities/usuario.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto'


@Injectable()
export class UsuarioService {
  constructor(@InjectModel('usuario') private readonly userModel: Model<UserDocument>) { }


  //CREAR
  async createUser(usuario: string, clave: string): Promise<Usuario> {
    return this.userModel.create({
      usuario,
      clave,
    });
  }



  //LOGIN
  async getUser(usuario): Promise<Usuario>{
    return await this.userModel.findOne({usuario:usuario});
  }
  
  
  //BUSCAR TODOS
  async findAll(): Promise<Usuario[]> {
    const usuariosAll= await this.userModel.find()
    return usuariosAll;
  }



  //BUSCAR UNO
  async findOne(id: string): Promise<Usuario> {
    const usuarioid = await this.userModel.findById(id);
    if (!usuarioid){
      throw new BadRequestException('No encontrado')
    }
    return usuarioid;
  }

  

  
  //ACTUALIZAR
  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioid = await this.userModel.findByIdAndUpdate(id, updateUsuarioDto).setOptions({new:true});
    if (!usuarioid){
      throw new NotFoundException('No se realizo')
    }
    return usuarioid
  }



  //ELIMINAR
  async delete(id:string): Promise<Usuario> {
    const userDelete = await this.userModel.findByIdAndDelete(id)
    return userDelete;
  }


   //BUSCAR POR NOMBRE
   async getName(usuario): Promise<Usuario> {
    return await this.userModel.findOne({usuario:usuario});
  }

 
  
}
