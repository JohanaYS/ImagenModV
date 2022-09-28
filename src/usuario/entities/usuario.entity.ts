import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  
  id: mongoose.Types.ObjectId;
  
  @Prop({lowercase: true, unique:true, trim:true})
  usuario: string;

  @Prop({trim:true})
  clave: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);