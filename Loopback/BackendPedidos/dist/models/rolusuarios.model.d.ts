import { Entity } from '@loopback/repository';
export declare class Rolusuarios extends Entity {
    id?: string;
    usuarioId?: string;
    rolesId?: string;
    constructor(data?: Partial<Rolusuarios>);
}
export interface RolusuariosRelations {
}
export declare type RolusuariosWithRelations = Rolusuarios & RolusuariosRelations;
