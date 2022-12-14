import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credenciales, Persona } from '../models';
import { PersonaRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class PersonaController {
    personaRepository: PersonaRepository;
    servicioAutenticacion: AutenticacionService;
    constructor(personaRepository: PersonaRepository, servicioAutenticacion: AutenticacionService);
    create(persona: Omit<Persona, 'id'>): Promise<Persona>;
    count(where?: Where<Persona>): Promise<Count>;
    find(filter?: Filter<Persona>): Promise<Persona[]>;
    updateAll(persona: Persona, where?: Where<Persona>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Persona>): Promise<Persona>;
    updateById(id: string, persona: Persona): Promise<void>;
    replaceById(id: string, persona: Persona): Promise<void>;
    deleteById(id: string): Promise<void>;
    /**
     * Metodos propios
     */
    identificar(credenciales: Credenciales): Promise<Persona | null>;
    identificarToken(credenciales: Credenciales): Promise<{
        respuesta: {
            nombre: string;
        };
        tk: any;
    }>;
}
