import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { WallpaperModule } from './wallpaper/wallpaper.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Johana:modulo78@bimagenes.5mt6rsf.mongodb.net/?retryWrites=true&w=majority'), 
    UsuarioModule, AuthModule, WallpaperModule, CategoriaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
