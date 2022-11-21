import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Roles } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioRolesController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Roles>): Promise<Roles[]>;
    create(id: typeof Usuario.prototype.id, roles: Omit<Roles, 'id'>): Promise<Roles>;
    patch(id: string, roles: Partial<Roles>, where?: Where<Roles>): Promise<Count>;
    delete(id: string, where?: Where<Roles>): Promise<Count>;
}
