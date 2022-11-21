"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolUsuarioController = class RolUsuarioController {
    constructor(rolusuariosRepository) {
        this.rolusuariosRepository = rolusuariosRepository;
    }
    async create(rolusuarios) {
        return this.rolusuariosRepository.create(rolusuarios);
    }
    async count(where) {
        return this.rolusuariosRepository.count(where);
    }
    async find(filter) {
        return this.rolusuariosRepository.find(filter);
    }
    async updateAll(rolusuarios, where) {
        return this.rolusuariosRepository.updateAll(rolusuarios, where);
    }
    async findById(id, filter) {
        return this.rolusuariosRepository.findById(id, filter);
    }
    async updateById(id, rolusuarios) {
        await this.rolusuariosRepository.updateById(id, rolusuarios);
    }
    async replaceById(id, rolusuarios) {
        await this.rolusuariosRepository.replaceById(id, rolusuarios);
    }
    async deleteById(id) {
        await this.rolusuariosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Rolusuarios model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios, {
                    title: 'NewRolusuarios',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Rolusuarios model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rolusuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Rolusuarios model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rolusuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rolusuarios'),
    (0, rest_1.response)(200, {
        description: 'Rolusuarios PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rolusuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rolusuarios, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rolusuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rolusuarios model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rolusuarios, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuarios PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rolusuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rolusuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuarios PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rolusuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/rolusuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rolusuarios DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RolUsuarioController.prototype, "deleteById", null);
RolUsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RolusuariosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RolusuariosRepository])
], RolUsuarioController);
exports.RolUsuarioController = RolUsuarioController;
//# sourceMappingURL=rol-usuario.controller.js.map