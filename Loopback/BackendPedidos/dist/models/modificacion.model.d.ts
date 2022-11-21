import { Model } from '@loopback/repository';
export declare class Modificacion extends Model {
    panterior: string;
    pnuevo: string;
    pvalidado: string;
    constructor(data?: Partial<Modificacion>);
}
export interface ModificacionRelations {
}
export declare type ModificacionWithRelations = Modificacion & ModificacionRelations;
