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
exports.getById = exports.deleteEntity = exports.update = exports.insert = exports.list = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const encrypth_utils_1 = require("../../shared/utils/encrypth/encrypth.utils");
const list = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_model_1.default.list();
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.list = list;
const insert = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        //first set
        userData.password = (0, encrypth_utils_1.encrypthPassword)(userData.password);
        userData.status = true;
        // generate recuperation password and confirmation token
        const response = yield user_model_1.default.insert(userData);
        res.status(201).send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.insert = insert;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userDataToUpdate = req.body;
        const response = yield user_model_1.default.update(userId, userDataToUpdate);
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.update = update;
const deleteEntity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const response = yield user_model_1.default.delete(userId);
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteEntity = deleteEntity;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const response = yield user_model_1.default.getById(userId);
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.getById = getById;
