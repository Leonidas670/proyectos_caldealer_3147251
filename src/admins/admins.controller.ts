import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';

@Controller("admins")
export class AdminsController {

//endpoint:
// es el destino de la request
// se escribe como una funcion
// en una clase controlador


  @Get()
  consultarUsuarios(): string {
    return "Aqui se podra consultar todos los ususarios"
  }

  @Get(":id")
  consultarUserPorId(@Param("id") id:string){
    return `Aqui se podra consultar usuario por id: ${id}`
  }

  @Patch(":id")
  actualizarUsuarioPorId(@Param("id") id:string): string{
  return `Aqui se actualizaran los usuarios por id: ${id}`
  }

  @Delete(":id")
  eliminarUsuarioPorId(@Param("id") id:string): string{
  return `Aqui se eliminaran los usuarios cuyo id sea: ${id}`
}


@Post()
crearUsuario(): string{
  return "Aqui se podran registrar usuarios"
}

@Patch()
actualizarUsuario(): string{
  return "Aqui se actualizaran los usuarios"
}

@Delete()
eliminarUsuario(): string{
  return "Aqui se eliminaran los usuarios"
}


}

