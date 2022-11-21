import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Roles, RolesRelations } from '../models';
export declare class RolesRepository extends DefaultCrudRepository<Roles, typeof Roles.prototype.id, RolesRelations> {
    constructor(dataSource: MongodbDataSource);
}
