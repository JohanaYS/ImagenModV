import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type ImagenDocument = Imagen & Document;

@Schema()
export class Imagen {

    id: mongoose.Types.ObjectId;

    @Prop({type: Date.now})
    createOn: Date;

    @Prop({unique:true})
    mainImageUrl: string;
}

export const ImagenSchema = SchemaFactory.createForClass(Imagen);
