import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsuarioService, private jwtService: JwtService) { }
    async login(usuarioDTO: CreateUsuarioDto) {
        const usuario:Usuario = await this.usersService.getUser( usuarioDTO.usuario);
        
        if (!usuario) return   new NotAcceptableException('No existe el usuario indicado');
        const validarPassword = await bcrypt.compare(usuarioDTO.clave, usuario.clave)
        if (usuario && validarPassword) {
            
            const payload = { usuario: usuario.usuario,id:usuario.id };
        return {
            token: this.jwtService.sign(payload),
        };
        }
        return false
    }
}