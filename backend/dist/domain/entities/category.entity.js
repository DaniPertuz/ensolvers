"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEntity = void 0;
class CategoryEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.CategoryEntity = CategoryEntity;
CategoryEntity.fromObject = (object) => {
    const { id, name } = object;
    const category = new CategoryEntity(id, name);
    return category;
};
//# sourceMappingURL=category.entity.js.map