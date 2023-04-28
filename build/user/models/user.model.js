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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserModel {
    constructor() {
        this.defineMongooseSchema();
        this.createMongooseModel();
    }
    defineMongooseSchema() {
        this.userSchema = new mongoose_1.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            phone: { type: String },
            rut: { type: String, unique: true },
            password: { type: String, required: true },
            status: { type: Boolean },
            recoverPasswordToken: { type: String },
            isConfirmed: { type: Boolean },
        });
    }
    createMongooseModel() {
        this.UserModel = (0, mongoose_1.model)('User', this.userSchema);
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.UserModel.find({});
            return users;
        });
    }
    insert(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new this.UserModel(userData);
            const savedUser = yield newUser.save();
            return savedUser;
        });
    }
    update(id, dataToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.UserModel.findByIdAndUpdate(id, dataToUpdate, { new: true });
            return updatedUser;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.UserModel.findByIdAndDelete(id);
            return deletedUser;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UserModel.findById(id);
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UserModel.getOne(email);
            return user;
        });
    }
}
const userModel = new UserModel();
exports.default = userModel;
