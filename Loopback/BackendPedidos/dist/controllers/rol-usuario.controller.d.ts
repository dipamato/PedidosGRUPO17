import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rolusuarios } from '../models';
import { RolusuariosRepository } from '../repositories';
export declare class RolUsuarioController {
    rolusuariosRepository: RolusuariosRepository;
    constructor(rolusuariosRepository: RolusuariosRepository);
    create(rolusuarios: Omit<Rolusuarios, 'id'>): Promise<Rolusuarios>;
    count(where?: Where<Rolusuarios>): Promise<Count>;
    find(filter?: Filter<Rolusuarios>): Promise<Rolusuarios[]>;
    updateAll(rolusuarios: Rolusuarios, where?: Where<Rolusuarios>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rolusuarios>): Promise<Rolusuarios>;
    updateById(id: string, rolusuarios: Rolusuarios): Promise<void>;
    replaceById(id: string, rolusuarios: Rolusuarios): Promise<void>;
    deleteById(id: string): Promise<void>;
}
