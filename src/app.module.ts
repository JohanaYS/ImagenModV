import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ImagenModule } from './imagen/imagen.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Johana:modulo78@bimagenes.5mt6rsf.mongodb.net/?retryWrites=true&w=majority'), 
    UsuarioModule, AuthModule, CategoriaModule, ImagenModule
  ],
  controllers: [AppController],
  providers: [AppService, {provide:APP_GUARD, useClass: RolesGuard,}],
})
export class AppModule {}
