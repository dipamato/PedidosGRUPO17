import { Entity } from '@loopback/repository';
import { Pedido } from './pedido.model';
export declare class Persona extends Entity {
    id?: string;
    nombre: string;
    correo: string;
    celular: string;
    clave?: string;
    perfil?: string;
    pedidos: Pedido[];
    pedidoId?: string;
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
