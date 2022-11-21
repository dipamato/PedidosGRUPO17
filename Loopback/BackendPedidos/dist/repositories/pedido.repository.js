"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PedidoRepository = class PedidoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productoRepositoryGetter, personaRepositoryGetter) {
        super(models_1.Pedido, dataSource);
        this.productoRepositoryGetter = productoRepositoryGetter;
        this.personaRepositoryGetter = personaRepositoryGetter;
        this.persona = this.createHasOneRepositoryFactoryFor('persona', personaRepositoryGetter);
        this.registerInclusionResolver('persona', this.persona.inclusionResolver);
        this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter);
        this.registerInclusionResolver('productos', this.productos.inclusionResolver);
    }
};
PedidoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('ProductoRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PersonaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], PedidoRepository);
exports.PedidoRepository = PedidoRepository;
//# sourceMappingURL=pedido.repository.js.map