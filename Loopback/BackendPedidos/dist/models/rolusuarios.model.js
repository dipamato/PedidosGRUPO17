"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rolusuarios = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Rolusuarios = class Rolusuarios extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuarios.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuarios.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Rolusuarios.prototype, "rolesId", void 0);
Rolusuarios = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Rolusuarios);
exports.Rolusuarios = Rolusuarios;
//# sourceMappingURL=rolusuarios.model.js.map