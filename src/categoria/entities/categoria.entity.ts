import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type CategoriaDocument = Categoria & Document;

@Schema()
export class Categoria {

    id: mongoose.Types.ObjectId;

    @Prop({unique:true})
    title: string;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
