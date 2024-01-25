"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CategoriesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const { createCategory, deleteCategory, getCategories } = new controller_1.CategoriesController();
        router.get('/', getCategories);
        router.post('/', createCategory);
        router.delete('/:id', deleteCategory);
        return router;
    }
}
exports.CategoriesRoutes = CategoriesRoutes;
//# sourceMappingURL=routes.js.map