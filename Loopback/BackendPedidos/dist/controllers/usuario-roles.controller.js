"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRolesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioRolesController = class UsuarioRolesController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async find(id, filter) {
        return this.usuarioRepository.roles(id).find(filter);
    }
    async create(id, roles) {
        return this.usuarioRepository.roles(id).create(roles);
    }
    async patch(id, roles, where) {
        return this.usuarioRepository.roles(id).patch(roles, where);
    }
    async delete(id, where) {
        return this.usuarioRepository.roles(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}/roles', {
        responses: {
            '200': {
                description: 'Array of Usuario has many Roles through Rolusuarios',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Roles) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRolesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios/{id}/roles', {
        responses: {
            '200': {
                description: 'create a Roles model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Roles) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, {
                    title: 'NewRolesInUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRolesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}/roles', {
        responses: {
            '200': {
                description: 'Usuario.Roles PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Roles))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRolesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}/roles', {
        responses: {
            '200': {
                description: 'Usuario.Roles DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Roles))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRolesController.prototype, "delete", null);
UsuarioRolesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioRolesController);
exports.UsuarioRolesController = UsuarioRolesController;
//# sourceMappingURL=usuario-roles.controller.js.map