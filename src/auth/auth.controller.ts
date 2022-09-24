import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
     }

   @UseGuards(LocalAuthGuard)
   @ApiBody({type: CreateUsuarioDto}) //cambio 2
    @Post('auth/login') // login requiere un json { "usuario":"Administrador2", "clave":"123456" }
    async login(@Request() req) {
        //req lleva todos los datos del request por lo tanto se extrae lo que va en el body
        return this.authService.login(req.body); 
    }

    //Aseguramos la ruta
    @ApiBearerAuth('JWT-auth') //cambio 1 para ver secreto
    @UseGuards(JwtAuthGuard) //hay que enviar el token
    @Get('secreto')
    secreto(@Request() req) {
        return { mensaje:"Usuario autenticado" };
    }
}
