import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Imagen } from "src/imagen/entities/imagen.entity";

export type CategoriaDocument = Categoria & Document;

@Schema()
export class Categoria {

    _id: mongoose.Types.ObjectId;

    @Prop({lowercase: true, unique:true, trim:true})
    title: string;

    @Prop()
    idImagen: Imagen[];

}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
