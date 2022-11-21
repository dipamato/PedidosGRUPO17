"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require("node-fetch");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, servicioAutenticacion, personaRepo) {
        this.usuarioRepository = usuarioRepository;
        this.servicioAutenticacion = servicioAutenticacion;
        this.personaRepo = personaRepo;
    }
    async create(usuario) {
        let clave = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.Encriptar(clave);
        usuario.clave = claveCifrada;
        let user = await this.usuarioRepository.create(usuario);
        if (usuario.perfil == "persona") {
            let p = await this.personaRepo.create(usuario);
        }
        return user;
        /** Implementacion de la notificación a través del correo */
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
    /**
     * Procesos propios
     */
    async identificar(credenciales) {
        let user = await this.servicioAutenticacion.IdentificarPersona(credenciales);
        if (user) {
            let token = this.servicioAutenticacion.GeneracionToken(user);
            return {
                info: {
                    nombre: user.nombre,
                    correo: user.correo,
                    id: user.id,
                    celular: user.celular,
                    perfil: user.perfil,
                    roles: user.roles
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("usuario o contraseña invalido");
        }
    }
    async recuperarPass(email) {
        let user = await this.usuarioRepository.findOne({
            where: {
                correo: email
            }
        });
        if (user) {
            let clave = this.servicioAutenticacion.GenerarClave();
            let claveCifrada = this.servicioAutenticacion.Encriptar(clave);
            user.clave = claveCifrada;
            await this.usuarioRepository.updateById(user.id, user);
            /**Notificación al correo */
            let destino = user.correo;
            let asunto = "Recuperación de contraseña de la APP-PEDIDOS";
            let mensaje = `Hola, ${user.nombre}, ud ha solicitado recuperar la contraseña, su nueva contraseña es: ${clave}`;
            fetch(`http://localhost:5000/e-mail?email_destino=${destino}&asunto=${asunto}&mensaje=${mensaje}`).
                then((data) => {
                console.log(data);
            });
            return true;
        }
        else {
            return false;
        }
    }
    async modificarPass(datos) {
        let cifrada = this.servicioAutenticacion.Encriptar(datos.panterior);
        let user = await this.usuarioRepository.findOne({
            where: {
                clave: cifrada
            }
        });
        if (user) {
            if (datos.pnuevo == datos.pvalidado) {
                user.clave = this.servicioAutenticacion.Encriptar(datos.pnuevo);
                await this.usuarioRepository.updateById(user.id, user);
                /** notificacion */
                let destino = user.correo;
                let asunto = "Modificación de contraseña de la APP-PEDIDOS";
                let mensaje = `Hola, ${user.nombre}, ud ha realizado una modificación de la contraseña, su nueva contraseña es: ${datos.pnuevo}`;
                fetch(`http://localhost:5000/e-mail?email_destino=${destino}&asunto=${asunto}&mensaje=${mensaje}`).
                    then((data) => {
                    console.log(data);
                });
                return true;
            }
            else {
                console.log("las contraseñas no coinciden");
                return false;
            }
        }
        else {
            return false;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/Registrese'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuario]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.post)('/Login'),
    (0, rest_1.response)(200, {
        description: "Ingreso de usuarios de la app"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "identificar", null);
tslib_1.__decorate([
    (0, rest_1.post)('/recuperar-Pass'),
    (0, rest_1.response)(200, {
        description: "Recuperación de contraseña para el usuario"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "recuperarPass", null);
tslib_1.__decorate([
    (0, rest_1.post)('/Modificar-Pass'),
    (0, rest_1.response)(200, {
        description: "Modificación de contraseña por parte del usuario"
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Modificacion]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioController.prototype, "modificarPass", null);
UsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__param(1, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AutenticacionService,
        repositories_1.PersonaRepository])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map