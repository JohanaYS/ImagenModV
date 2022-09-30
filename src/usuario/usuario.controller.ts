import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ACGuard, UseRoles } from 'nest-access-control';



@ApiTags('usuarios')

@Controller('usuario')

export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}
  
  //CREAR
  @Post('/crear') //se envia un json { "usuario":"Administrador",  "clave":"123456" }
    async createUser(@Body() datos:CreateUsuarioDto): Promise<Usuario> {
        const saltOrRounds = 10;
        const claveEncriptada = await bcrypt.hash(datos.clave, saltOrRounds); // acá se encripta
        const result = await this.usuarioService.createUser(datos.usuario,claveEncriptada);
        return result;
    }


    //BUSCAR UNO
    /* @ApiBearerAuth('JWT-auth') 
    @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usuarioService.findOne(id);
    }


    //BUSCAR TODOS
    @ApiBearerAuth('JWT-auth')
    @UseGuards(JwtAuthGuard, ACGuard) //necesita un token para consultar este recurso
    @UseRoles({possession: 'any', action: 'read', resource: 'imagens'})
    @Get()
    findAll():Promise<Usuario[]> {
      return this.usuarioService.findAll();
    }

    //ACTUALIZAR
    /* @ApiBearerAuth('JWT-auth')  
    @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
    @ApiBody({type:UpdateUsuarioDto})
    @Put('/actualizar/:id') 
        async updateUser(@Param('id')_id:string, @Body() datos:UpdateUsuarioDto): Promise<Usuario> {
        const result = await this.usuarioService.update(_id, datos);
        return result;
    }
    

    //ELIMINAR
    /* @ApiBearerAuth('JWT-auth') 
    @UseGuards(JwtAuthGuard) //necesita un token para consultar este recurso */
    @Delete('/eliminar/:id') 
      async deleteUser(@Param('id')_id:string): Promise<Usuario> {
          return this.usuarioService.delete(_id);
      }
   

}
