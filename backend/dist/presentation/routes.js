"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./auth/routes");
const routes_2 = require("./controllers/categories/routes");
const routes_3 = require("./controllers/notes/routes");
const express_1 = require("express");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use((0, cors_1.default)());
        router.use('/api/auth', routes_1.AuthRoutes.routes);
        router.use('/api/categories', routes_2.CategoriesRoutes.routes);
        router.use('/api/notes', routes_3.NoteRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map