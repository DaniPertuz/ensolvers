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
exports.PostgresUserDatasource = void 0;
const client_1 = require("@prisma/client");
const user_entity_1 = require("../../domain/entities/user.entity");
const plugins_1 = require("../../plugins");
const prisma = new client_1.PrismaClient();
class PostgresUserDatasource {
    login(email, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDB = yield prisma.user_notes.findFirst({
                where: { email }
            });
            if (!userDB)
                return { error: 'User not found' };
            const isMatching = plugins_1.bcryptAdapter.compare(userPassword, userDB.password);
            if (!isMatching)
                return { error: 'Password is not valid' };
            const userEntity = {
                id: userDB.id,
                email: userDB.email,
                name: userDB.name
            };
            return user_entity_1.UserEntity.fromObject(userEntity);
        });
    }
}
exports.PostgresUserDatasource = PostgresUserDatasource;
//# sourceMappingURL=postgres-user.datasource.js.map