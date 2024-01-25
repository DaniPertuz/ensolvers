"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const { login } = new controller_1.AuthController();
        router.post('/login', login);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=routes.js.map