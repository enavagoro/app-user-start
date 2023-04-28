"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
// import { requestValidatorWrapper } from '../../shared/middlewares/requestValidatorMiddleware/requestValidator.middleware';
const jwt_validation_middleware_1 = require("../../shared/middlewares/jwt.validation.middleware");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', jwt_validation_middleware_1.validJWTNeeded, user_controller_1.list);
        this.router.post('/', user_controller_1.insert); // requestValidatorWrapper('userStructure'), 
        this.router.patch('/:id', jwt_validation_middleware_1.validJWTNeeded, user_controller_1.update);
        this.router.delete('/:id', jwt_validation_middleware_1.validJWTNeeded, user_controller_1.deleteEntity);
        this.router.get('/:id', user_controller_1.getById);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
