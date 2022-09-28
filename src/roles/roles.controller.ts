import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  //CREAR
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Post('/crear')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createImagen(createRoleDto);
  }

  //BUSCAR TODOS
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Get()
  findAll(){
    return this.rolesService.findAll();
  }

  //BUSCAR UNO
  @ApiBearerAuth('JWT-auth') 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  //ACTUALIZAR
  @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto:UpdateRoleDto) {
    return this.rolesService.update(id, updateRoleDto)
  }

  //ELIMINAR
  @ApiBearerAuth('JWT-auth') //cambio 
  @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rolesService.delete(id);
  }
}
