import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
import { Persona } from './persona.model';
export declare class Pedido extends Entity {
    id?: string;
    cantidad: number;
    total: number;
    estado: number;
    personaId?: string;
    productos: Producto[];
    persona: Persona;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export declare type PedidoWithRelations = Pedido & PedidoRelations;
