import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Roles } from '../models';
import { RolesRepository } from '../repositories';
export declare class RolesController {
    rolesRepository: RolesRepository;
    constructor(rolesRepository: RolesRepository);
    create(roles: Omit<Roles, 'id'>): Promise<Roles>;
    count(where?: Where<Roles>): Promise<Count>;
    find(filter?: Filter<Roles>): Promise<Roles[]>;
    updateAll(roles: Roles, where?: Where<Roles>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Roles>): Promise<Roles>;
    updateById(id: string, roles: Roles): Promise<void>;
    replaceById(id: string, roles: Roles): Promise<void>;
    deleteById(id: string): Promise<void>;
}
