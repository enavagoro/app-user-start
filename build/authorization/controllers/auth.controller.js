"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_services_1 = require("../services/auth.services");
const user_model_1 = __importDefault(require("../../user/models/user.model"));
const error_middleware_1 = require("../../shared/middlewares/error.middleware");
const jwt_encrypth_utils_1 = require("../../shared/utils/encrypth/jwt.encrypth.utils");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('req.body:', req.body);
        const authData = { email: req.body.email, password: req.body.password };
        console.log('authData:', authData);
        const user = yield user_model_1.default.getByEmail(authData.email);
        console.log('user:', authData);
        (0, auth_services_1.emailAndPasswordMatch)(user.password, authData.password);
        const accessToken = (0, jwt_encrypth_utils_1.generateToken)(user);
        res.status(201).send({ accessToken, userId: user._id });
    }
    catch (error) {
        (0, error_middleware_1.generateNewError)(500, `Email doesn't exist or password is invalid`);
    }
});
exports.login = login;
