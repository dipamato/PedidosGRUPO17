import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credenciales, Modificacion, Usuario } from '../models';
import { PersonaRepository, UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    servicioAutenticacion: AutenticacionService;
    personaRepo: PersonaRepository;
    constructor(usuarioRepository: UsuarioRepository, servicioAutenticacion: AutenticacionService, personaRepo: PersonaRepository);
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: string, usuario: Usuario): Promise<void>;
    replaceById(id: string, usuario: Usuario): Promise<void>;
    deleteById(id: string): Promise<void>;
    /**
     * Procesos propios
     */
    identificar(credenciales: Credenciales): Promise<{
        info: {
            nombre: string;
            correo: string;
            id: string | undefined;
            celular: string;
            perfil: string | undefined;
            roles: import("../models").Roles[];
        };
        tk: any;
    }>;
    recuperarPass(email: string): Promise<Boolean>;
    modificarPass(datos: Modificacion): Promise<Boolean>;
}
