import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { UserDocument, Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuarioService {
  //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       findOne: any;

  constructor(@InjectModel('usuario') private readonly userModel: Model<UserDocument>) { }


  async createUser(usuario: string, clave: string): Promise<Usuario> {
      return this.userModel.create({
          usuario,
          clave,
      });
  }
  async getUser(usuario): Promise<Usuario> {
    
    return await this.userModel.findOne({usuario:usuario})
    
  }

  async findOne(id: string): Promise<Usuario> {
    
    const usuarioid = await this.userModel.findById(id)
    return usuarioid;
  }

  async findAll(): Promise<Usuario[]> {
    const usuariosAll= await this.userModel.find()
    return usuariosAll;
  }
 
  
}
