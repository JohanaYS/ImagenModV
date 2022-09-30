import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export type ImagenDocument = Imagen & Document;

@Schema({ versionKey: false })  //versionKey para deshabilitar las versiones de mongoose
export class Imagen {

    _id: mongoose.Types.ObjectId;

    @Prop({timestamps: true})
    createOn: Date;

    @Prop({unique:true, trim:true})
    mainImageUrl: string;

    @Prop()
    usuario: Usuario;

    @Prop()
    categoria: Categoria;
}

export const ImagenSchema = SchemaFactory.createForClass(Imagen);
