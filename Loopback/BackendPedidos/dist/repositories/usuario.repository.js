"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuarioRepository = class UsuarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rolusuariosRepositoryGetter, rolesRepositoryGetter) {
        super(models_1.Usuario, dataSource);
        this.rolusuariosRepositoryGetter = rolusuariosRepositoryGetter;
        this.rolesRepositoryGetter = rolesRepositoryGetter;
        this.roles = this.createHasManyThroughRepositoryFactoryFor('roles', rolesRepositoryGetter, rolusuariosRepositoryGetter);
        this.registerInclusionResolver('roles', this.roles.inclusionResolver);
    }
};
UsuarioRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('RolusuariosRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RolesRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map