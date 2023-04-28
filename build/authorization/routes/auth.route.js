"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
class AuthorizationRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/', auth_controller_1.login);
    }
}
const authorizationRoutes = new AuthorizationRoutes();
exports.default = authorizationRoutes.router;
