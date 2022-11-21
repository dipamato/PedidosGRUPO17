"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estrategiaAdmin = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = tslib_1.__importDefault(require("parse-bearer-token"));
const services_1 = require("../services");
const core_1 = require("@loopback/core");
var respuesta = false;
let estrategiaAdmin = class estrategiaAdmin {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = "admin";
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.ValidarToken(token);
            if (datos) {
                if (datos.data.rol) {
                    datos.data.rol.forEach(function (rol) {
                        console.log("este esel rol: " + rol.nombre);
                        if (rol.nombre == "Administrador") {
                            respuesta = true;
                        }
                    });
                    if (respuesta) {
                        var perfil = Object.assign({
                            nombre: datos.data.nombre
                        });
                        return perfil;
                    }
                    else {
                        throw new rest_1.HttpErrors[401]("ud no es un administrador y por lo tanto no tiene acceso a este recurso");
                    }
                }
                else {
                    throw new rest_1.HttpErrors[401]("Ud es un usuario de tipo cliente, sin autorización para este recurso");
                }
            }
            else {
                throw new rest_1.HttpErrors[401]("Tiene un token, pero no es valido");
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("No hay un token en la solicitud!");
        }
    }
};
estrategiaAdmin = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(services_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [services_1.AutenticacionService])
], estrategiaAdmin);
exports.estrategiaAdmin = estrategiaAdmin;
//# sourceMappingURL=estrategiaAdmin.js.map