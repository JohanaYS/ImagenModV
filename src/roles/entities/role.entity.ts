import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type RoleDocument = Role & Document;

export class Role {

    id: mongoose.Types.ObjectId;

    @Prop({lowercase: true, unique:true})
    title: string;

}

export const RoleSchema = SchemaFactory.createForClass(Role);

