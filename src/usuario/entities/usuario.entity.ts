import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Role } from 'src/role/role.enum';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  
  id: mongoose.Types.ObjectId;
  
  @Prop({lowercase: true, unique:true})
  usuario: string;

  @Prop()
  clave: string;

  /* @Prop( { type: String,  default: Role.User} )
  roles: Role[]; */
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);