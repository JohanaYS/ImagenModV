import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type ImagenDocument = Imagen & Document;

@Schema()
export class Imagen {

    id: mongoose.Types.ObjectId;

    @Prop({lowercase: true, unique:true})
    title: string;

    @Prop({type: Date.now})
    createOn: Date;

    @Prop({type:URL, unique:true})
    mainImageUrl: URL;
}

export const ImagenSchema = SchemaFactory.createForClass(Imagen);
