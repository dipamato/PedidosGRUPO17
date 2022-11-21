"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoPersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoPersonaController = class PedidoPersonaController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async get(id, filter) {
        return this.pedidoRepository.persona(id).get(filter);
    }
    async create(id, persona) {
        return this.pedidoRepository.persona(id).create(persona);
    }
    async patch(id, persona, where) {
        return this.pedidoRepository.persona(id).patch(persona, where);
    }
    async delete(id, where) {
        return this.pedidoRepository.persona(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Pedido has one Persona',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Persona),
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
], PedidoPersonaController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Pedido model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Persona) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, {
                    title: 'NewPersonaInPedido',
                    exclude: ['id'],
                    optional: ['pedidoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoPersonaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Pedido.Persona PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Persona))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoPersonaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Pedido.Persona DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Persona))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoPersonaController.prototype, "delete", null);
PedidoPersonaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoPersonaController);
exports.PedidoPersonaController = PedidoPersonaController;
//# sourceMappingURL=pedido-persona.controller.js.map