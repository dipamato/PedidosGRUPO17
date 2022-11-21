import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Rolusuarios, RolusuariosRelations } from '../models';
export declare class RolusuariosRepository extends DefaultCrudRepository<Rolusuarios, typeof Rolusuarios.prototype.id, RolusuariosRelations> {
    constructor(dataSource: MongodbDataSource);
}
