import { RolesBuilder } from "nest-access-control";

export enum UserRoles {

    Admin = 'admin',
    User = 'user',
    
   }

   export const roles:RolesBuilder = new RolesBuilder();


   roles.grant(UserRoles.User)
   .readAny(["imagens"])
   .grant(UserRoles.Admin)
   .extend(UserRoles.User)
   .updateAny(["imagens"])
   .create(["imagens"])
   .deleteAny(["imagens"]);
   