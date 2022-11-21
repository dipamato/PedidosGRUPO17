"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const Keys_1 = require("../configuracion/Keys");
const repositories_1 = require("../repositories");
const generador = require("generate-password");
const crypyoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(repositorioPersona, usuarioRepo) {
        this.repositorioPersona = repositorioPersona;
        this.usuarioRepo = usuarioRepo;
    }
    GenerarClave() {
        let password = generador.generate({
            length: 8,
            numbers: true
        });
        return password;
    }
    Encriptar(password) {
        let passCifrado = crypyoJS.MD5(password).toString();
        return passCifrado;
    }
    IdentificarPersona(credenciales) {
        try {
            //credenciales.password=this.Encriptar(credenciales.password);
            let p = this.usuarioRepo.findOne({
                where: {
                    correo: credenciales.usuario,
                    clave: credenciales.password
                }, include: ['roles']
            });
            return p;
        }
        catch (_a) {
            return false;
        }
    }
    GeneracionToken(usuario) {
        let token = JWT.sign({
            data: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre,
                rol: usuario.roles
            }
        }, Keys_1.Keys.LlaveJWT);
        return token;
    }
    ValidarToken(token) {
        try {
            let datos = JWT.verify(token, Keys_1.Keys.LlaveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository,
        repositories_1.UsuarioRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map