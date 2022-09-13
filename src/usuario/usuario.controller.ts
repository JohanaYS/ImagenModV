import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';


@ApiTags('usuarios')
@ApiBearerAuth('JWT-auth') //cambio 2
@UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso
@Controller('usuario')

export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}
  //@ApiBody({type: CreateUsuarioDto}) //cambio 3
  @Post('/crear') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async createUser(@Body() datos:CreateUsuarioDto): Promise<Usuario> {
        const saltOrRounds = 10;
        const claveEncriptada = await bcrypt.hash(datos.clave, saltOrRounds); // acá se encripta
        const result = await this.usuarioService.createUser(datos.usuario,claveEncriptada);
        return result;
    }


    //@ApiBody({type: CreateUsuarioDto}) //cambio 3
    @Get('/id')
    findOne(@Param('id') id: string) {
      return this.usuarioService.findOne(id);
    }

    @Get()
    findAll(){
      return this.usuarioService.findAll();
    }
   

}
