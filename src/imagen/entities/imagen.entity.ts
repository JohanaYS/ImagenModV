import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export type ImagenDocument = Imagen & Document;

@Schema()
export class Imagen {

    id: mongoose.Types.ObjectId;

    @Prop({unique:true})
    title: string;

    @Prop({type:()=> Date})
    createOn: Date;

    @Prop({type:()=> Date})
    modifiedOn: Date;

    @Prop({unique:true})
    mainImageUrl: string;
}

export const ImagenSchema = SchemaFactory.createForClass(Imagen);
