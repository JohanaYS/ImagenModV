import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ImagenService } from './imagen.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { Imagen } from './entities/imagen.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('imagen')
@Controller('imagen')
export class ImagenController {

  constructor(private readonly imagenService: ImagenService) {}

  //CREAR
  /* @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
  @Post('/crear')
  create(@Body() createImagenDto: CreateImagenDto) {
    return this.imagenService.createImagen(createImagenDto);
  }

  //BUSCAR TODOS
  /* @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
  @Get()
  findAll(){
    return this.imagenService.findAll();
  }

  //BUSCAR UNO
  /* @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
  @Get('/buscarUno/:id')
  findOne(@Param('id') id: string) {
    return this.imagenService.findOne(id);
  }

  //ACTUALIZAR
  /* @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
  @Put('/actualizar/:id')
  update(@Param('id') id: string, @Body() updateImagenDto:UpdateImagenDto) {
    return this.imagenService.update(id, updateImagenDto)
  }

  //ELIMINAR
  /* @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
  @Delete('/eliminar/:id')
  delete(@Param('id') id: string) {
    return this.imagenService.delete(id);
  }
}
