import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserRoles } from 'src/role/user-roles.models';

export type UserDocument = Usuario & Document;

@Schema({ versionKey: false })  //versionKey para deshabilitar las versiones de mongoose
export class Usuario {
  
  _id: mongoose.Types.ObjectId;
  
  @Prop({lowercase: true, unique:true, trim:true})
  usuario: string;

  @Prop({trim:true})
  clave: string;

  @Prop({type: String, enum: UserRoles, enumName: 'roles', default:UserRoles.User})
  rol: UserRoles;
  
  @Prop()
  activo: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);