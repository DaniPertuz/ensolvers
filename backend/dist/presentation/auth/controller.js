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
exports.AuthController = void 0;
const user_impl_repository_1 = require("../../infrastructure/repositories/user-impl.repository");
const postgres_user_datasource_1 = require("../../infrastructure/datasources/postgres-user.datasource");
const user_entity_1 = require("../../domain/entities/user.entity");
class AuthController {
    constructor() {
        this.userRepo = new user_impl_repository_1.UserRepositoryImpl(new postgres_user_datasource_1.PostgresUserDatasource());
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const login = yield this.userRepo.login(email, password);
            (login instanceof user_entity_1.UserEntity) ? res.json(login) : res.status(400).json(login);
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=controller.js.map