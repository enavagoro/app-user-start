"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_middleware_1 = require("../../middlewares/error.middleware");
const generateToken = (data) => {
    try {
        const payload = data;
        const options = {
            expiresIn: '1h', // Set the token to expire in 1 hour
        };
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jsonwebtoken_1.default.sign(payload, jwtSecret, options);
        return token;
    }
    catch (err) {
        (0, error_middleware_1.generateNewError)(500);
    }
};
exports.generateToken = generateToken;
