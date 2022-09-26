import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from 'src/role/role.enum';
import { ROLES_KEY } from 'src/role/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
    
    constructor(private reflector: Reflector) {}

    
    canActivate( context: ExecutionContext): boolean {

        const requiredRoles: Role[] = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY,  
           [
            context.getHandler(),   //OBTENER CONTEXTO. Para saber el metodo y el controller utilizado en nuestra guardia para acceder a los metadatos
            context.getClass(),
        ]
        );

        if (!requiredRoles) {
            return true;
        }

        //OBTENER EL USUARIO Y SU ROL DE MOMENTO
        const {usuario} = context.switchToHttp().getRequest();
      
        
        return requiredRoles.some((role) => usuario.role?.include(role));
    }
}