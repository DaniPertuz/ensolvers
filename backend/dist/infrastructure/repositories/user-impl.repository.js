"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    constructor(userDatasource) {
        this.userDatasource = userDatasource;
    }
    login(email, password) {
        return this.userDatasource.login(email, password);
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user-impl.repository.js.map