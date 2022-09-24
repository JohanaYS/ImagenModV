import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Role } from 'src/role/role.enum';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  
  id: mongoose.Types.ObjectId;
  
  @Prop({unique:true})
  usuario: string;

  @Prop()
  clave: string;

  @Prop({ enum: Role,  default: Role.User})
  roles: String[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);