"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modificacion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Modificacion = class Modificacion extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificacion.prototype, "panterior", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificacion.prototype, "pnuevo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Modificacion.prototype, "pvalidado", void 0);
Modificacion = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Modificacion);
exports.Modificacion = Modificacion;
//# sourceMappingURL=modificacion.model.js.map