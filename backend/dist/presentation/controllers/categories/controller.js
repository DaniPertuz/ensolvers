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
exports.CategoriesController = void 0;
const category_impl_repository_1 = require("../../../infrastructure/repositories/category-impl.repository");
const postgres_category_datasource_1 = require("../../../infrastructure/datasources/postgres-category.datasource");
class CategoriesController {
    constructor() {
        this.categoryRepo = new category_impl_repository_1.CategoryRepositoryImpl(new postgres_category_datasource_1.PostgresCategoryDatasource());
        this.getCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.categoryRepo.getCategories();
            res.json(categories);
        });
        this.createCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, name } = req.body;
            const category = yield this.categoryRepo.createCategory({ id, name });
            (category) ? res.json(category) : res.status(400).json({ error: 'Category already registered' });
        });
        this.deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const category = yield this.categoryRepo.removeCategory(id);
            res.json({ removed: category });
        });
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=controller.js.map