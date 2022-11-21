import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyThroughRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Roles, Rolusuarios } from '../models';
import { RolusuariosRepository } from './rolusuarios.repository';
import { RolesRepository } from './roles.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected rolusuariosRepositoryGetter: Getter<RolusuariosRepository>;
    protected rolesRepositoryGetter: Getter<RolesRepository>;
    readonly roles: HasManyThroughRepositoryFactory<Roles, typeof Roles.prototype.id, Rolusuarios, typeof Usuario.prototype.id>;
    constructor(dataSource: MongodbDataSource, rolusuariosRepositoryGetter: Getter<RolusuariosRepository>, rolesRepositoryGetter: Getter<RolesRepository>);
}
