"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolesController = class RolesController {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async create(roles) {
        return this.rolesRepository.create(roles);
    }
    async count(where) {
        return this.rolesRepository.count(where);
    }
    async find(filter) {
        return this.rolesRepository.find(filter);
    }
    async updateAll(roles, where) {
        return this.rolesRepository.updateAll(roles, where);
    }
    async findById(id, filter) {
        return this.rolesRepository.findById(id, filter);
    }
    async updateById(id, roles) {
        await this.rolesRepository.updateById(id, roles);
    }
    async replaceById(id, roles) {
        await this.rolesRepository.replaceById(id, roles);
    }
    async deleteById(id) {
        await this.rolesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Roles model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Roles) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, {
                    title: 'NewRoles',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles/count'),
    (0, rest_1.response)(200, {
        description: 'Roles model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Roles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Array of Roles model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Roles, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Roles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Roles PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Roles)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Roles, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles/{id}'),
    (0, rest_1.response)(200, {
        description: 'Roles model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Roles, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roles PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roles, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Roles]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roles PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Roles]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roles DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesController.prototype, "deleteById", null);
RolesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RolesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RolesRepository])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map