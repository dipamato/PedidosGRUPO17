import { Credenciales, Usuario } from '../models';
import { PersonaRepository, UsuarioRepository } from '../repositories';
export declare class AutenticacionService {
    repositorioPersona: PersonaRepository;
    usuarioRepo: UsuarioRepository;
    constructor(repositorioPersona: PersonaRepository, usuarioRepo: UsuarioRepository);
    GenerarClave(): any;
    Encriptar(password: string): any;
    IdentificarPersona(credenciales: Credenciales): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    GeneracionToken(usuario: Usuario): any;
    ValidarToken(token: string): any;
}
