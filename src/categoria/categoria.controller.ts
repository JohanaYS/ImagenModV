import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('categorias')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  //CREAR
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Post('/crear')
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.createImagen(createCategoriaDto);
  }

  //BUSCAR TODOS
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Get()
  findAll(){
    return this.categoriaService.findAll();
  }

  //BUSCAR UNO
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(id);
  }

  //ACTUALIZAR
  @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto:UpdateCategoriaDto) {
    return this.categoriaService.update(id, updateCategoriaDto)
  }

  //ELIMINAR
  @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriaService.delete(id);
  }
}
