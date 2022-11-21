import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Keys } from '../configuracion/Keys';
import { Credenciales, Persona, Roles, Usuario } from '../models';
import { PersonaRepository, UsuarioRepository } from '../repositories';
const generador=require("generate-password");
const crypyoJS= require("crypto-js");
const JWT = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository (PersonaRepository)
    public repositorioPersona: PersonaRepository,
    @repository(UsuarioRepository)
    public usuarioRepo: UsuarioRepository
  ) {}

  GenerarClave(){
    let password=generador.generate({
      length: 8,
      numbers: true
    });
    return password;
  }

  Encriptar(password:string){
    let passCifrado=crypyoJS.MD5(password).toString();
    return passCifrado;
  }

  IdentificarPersona(credenciales: Credenciales){
    try {
      //credenciales.password=this.Encriptar(credenciales.password);
      let p=this.usuarioRepo.findOne({
        where: {
          correo: credenciales.usuario,
          clave: credenciales.password
        }, include: ['roles']
      });
      return p;
    } catch  {
      return false;
    }
  }

  GeneracionToken (usuario: Usuario){
    let token = JWT.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.roles
      }
    }, Keys.LlaveJWT);
    return token;
  }
  
  ValidarToken(token: string){
    try {
      let datos= JWT.verify(token,Keys.LlaveJWT);
      return datos;
    } catch  {
      return false;
    }
  }

}
