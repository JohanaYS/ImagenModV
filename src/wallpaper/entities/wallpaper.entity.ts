import * as mongoose from 'mongoose' //esquema de moongoose

export const Wallpaper = new mongoose.Schema({
    
    idwallpaper: Number,
    nombre: String,
    url: String,
    dimensiones: String,
    usuario: String
        
});