import { AuthenticationStrategy } from "@loopback/authentication";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import parseBearerToken from 'parse-bearer-token'
import { AutenticacionService } from "../services";
import { service } from "@loopback/core";
import { Roles } from "../models";
var respuesta:Boolean=false;

export class estrategiaAdmin implements AuthenticationStrategy {
    name: string = "admin";

    constructor(
        @service(AutenticacionService)
        public servicioAutenticacion: AutenticacionService

    ) { }

   async authenticate(request: Request): Promise<UserProfile  | undefined> {
    let token = parseBearerToken(request);
    if (token) {
        let datos= this.servicioAutenticacion.ValidarToken(token);
        if (datos) {
            if (datos.data.rol) {
                datos.data.rol.forEach(function(rol:any) {
                    console.log ("este esel rol: "+ rol.nombre);
                    if(rol.nombre=="Administrador"){
                        respuesta=true;
                    }  
                });
                if (respuesta) {
                    var perfil: UserProfile= Object.assign({
                        nombre: datos.data.nombre
                    });
                    return perfil;
                } else {
                  throw new HttpErrors[401]("ud no es un administrador y por lo tanto no tiene acceso a este recurso")  
                }
                
            } else {
                throw new HttpErrors[401]("Ud es un usuario de tipo cliente, sin autorización para este recurso");
            }
            
        } else {
            throw new HttpErrors[401]("Tiene un token, pero no es valido");
        }
        
    } else {
        throw new HttpErrors[401]("No hay un token en la solicitud!")
    }
       
   }
}