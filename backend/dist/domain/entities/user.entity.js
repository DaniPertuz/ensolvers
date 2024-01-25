"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, email, password, name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }
}
exports.UserEntity = UserEntity;
UserEntity.fromObject = (object) => {
    const { id, email, password, name } = object;
    const user = new UserEntity(id, email, password, name);
    return user;
};
//# sourceMappingURL=user.entity.js.map