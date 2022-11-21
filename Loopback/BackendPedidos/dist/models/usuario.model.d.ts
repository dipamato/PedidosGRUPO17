import { Entity } from '@loopback/repository';
import { Roles } from './roles.model';
export declare class Usuario extends Entity {
    id?: string;
    nombre: string;
    correo: string;
    celular: string;
    clave?: string;
    perfil?: string;
    roles: Roles[];
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
