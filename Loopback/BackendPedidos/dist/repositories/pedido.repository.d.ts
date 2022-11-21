import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Producto, Persona } from '../models';
import { ProductoRepository } from './producto.repository';
import { PersonaRepository } from './persona.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly productos: HasManyRepositoryFactory<Producto, typeof Pedido.prototype.id>;
    readonly persona: HasOneRepositoryFactory<Persona, typeof Pedido.prototype.id>;
    constructor(dataSource: MongodbDataSource, productoRepositoryGetter: Getter<ProductoRepository>, personaRepositoryGetter: Getter<PersonaRepository>);
}
