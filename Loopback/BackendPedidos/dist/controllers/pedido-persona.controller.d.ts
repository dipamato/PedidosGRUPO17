import { Count, Filter, Where } from '@loopback/repository';
import { Pedido, Persona } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoPersonaController {
    protected pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    get(id: string, filter?: Filter<Persona>): Promise<Persona>;
    create(id: typeof Pedido.prototype.id, persona: Omit<Persona, 'id'>): Promise<Persona>;
    patch(id: string, persona: Partial<Persona>, where?: Where<Persona>): Promise<Count>;
    delete(id: string, where?: Where<Persona>): Promise<Count>;
}
