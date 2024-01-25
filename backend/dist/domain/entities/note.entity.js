"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteEntity = void 0;
class NoteEntity {
    constructor(options) {
        const { id, title, body, category, status } = options;
        this.id = id;
        this.title = title;
        this.body = body;
        this.category = category;
        this.status = status;
    }
}
exports.NoteEntity = NoteEntity;
NoteEntity.fromObject = (object) => {
    const { id, title, body, category, status } = object;
    const note = new NoteEntity({ id, title, body, category, status });
    return note;
};
//# sourceMappingURL=note.entity.js.map