import { Entity } from '@loopback/repository';
export declare class Roles extends Entity {
    id?: string;
    nombre: string;
    constructor(data?: Partial<Roles>);
}
export interface RolesRelations {
}
export declare type RolesWithRelations = Roles & RolesRelations;
