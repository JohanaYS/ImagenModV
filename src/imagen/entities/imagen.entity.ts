import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type ImagenDocument = Imagen & Document;

@Schema()
export class Imagen {

    id: mongoose.Types.ObjectId;

    @Prop({timestamps: true})
    createOn: Date;

    @Prop({unique:true, trim:true})
    mainImageUrl: string;
}

export const ImagenSchema = SchemaFactory.createForClass(Imagen);
