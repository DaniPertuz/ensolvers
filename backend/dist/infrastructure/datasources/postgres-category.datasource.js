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
exports.PostgresCategoryDatasource = void 0;
const client_1 = require("@prisma/client");
const category_entity_1 = require("../../domain/entities/category.entity");
const prisma = new client_1.PrismaClient();
class PostgresCategoryDatasource {
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield prisma.category.findMany();
            return categories.map(category_entity_1.CategoryEntity.fromObject);
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = category;
            const categoryDB = yield prisma.category.findFirst({
                where: {
                    name
                }
            });
            if (categoryDB)
                return null;
            const newCategory = yield prisma.category.create({
                data: { id, name }
            });
            return category_entity_1.CategoryEntity.fromObject(newCategory);
        });
    }
    removeCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return category_entity_1.CategoryEntity.fromObject(yield prisma.category.delete({
                where: { id }
            }));
        });
    }
}
exports.PostgresCategoryDatasource = PostgresCategoryDatasource;
//# sourceMappingURL=postgres-category.datasource.js.map