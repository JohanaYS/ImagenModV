import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role, RoleDocument } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectModel('role') private readonly roleModel: Model<RoleDocument>) { }


  //CREAR
  async createImagen(createRoleDto: CreateRoleDto): Promise<Role> {
    return (await this.roleModel.create(createRoleDto));
  }
  
  //BUSCAR TODOS
  async findAll(): Promise<Role[]> {
    const roleAll= await this.roleModel.find()
    return roleAll;
  }

  //BUSCAR UNO
  async findOne(id: string): Promise<Role> {
    const roleid = await this.roleModel.findById(id);
    if (!roleid){
      throw new BadRequestException('No encontrado')
    }
    return roleid;
  }

  //ACTUALIZAR
  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const roleid = await this.roleModel.findByIdAndUpdate(id, updateRoleDto).setOptions({new:true});
    if (!roleid){
      throw new NotFoundException('No se realizo')
    }
    return roleid;
  }

  //ELIMINAR
  async delete(id:string): Promise<Role> {
    return await this.roleModel.findByIdAndDelete(id);
  }
}
