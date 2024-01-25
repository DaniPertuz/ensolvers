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
exports.PostgresNoteDatasource = void 0;
const client_1 = require("@prisma/client");
const note_entity_1 = require("../../domain/entities/note.entity");
const prisma = new client_1.PrismaClient();
class PostgresNoteDatasource {
    createNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, body, category } = note;
            if (!category || isNaN(category))
                return null;
            const categoryDB = yield prisma.category.findFirst({
                where: {
                    id: category
                }
            });
            if (!categoryDB)
                return null;
            return note_entity_1.NoteEntity.fromObject(yield prisma.notes.create({
                data: { id, title, body, category, status: 'active' }
            }));
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield prisma.notes.findMany({
                orderBy: [
                    { id: 'asc' }
                ]
            });
            return notes.map(note_entity_1.NoteEntity.fromObject);
        });
    }
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isNaN(id))
                return null;
            const note = yield prisma.notes.findFirst({
                where: { id }
            });
            return note ? note_entity_1.NoteEntity.fromObject(note) : null;
        });
    }
    getNotesByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryDB = yield prisma.category.findFirst({
                where: {
                    name: category
                }
            });
            const notes = yield prisma.notes.findMany({
                where: {
                    category: categoryDB === null || categoryDB === void 0 ? void 0 : categoryDB.id
                }
            });
            return notes.map(note_entity_1.NoteEntity.fromObject);
        });
    }
    getNotesByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield prisma.notes.findMany({
                where: {
                    status: status
                }
            });
            return notes.map(note_entity_1.NoteEntity.fromObject);
        });
    }
    updateNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            return note_entity_1.NoteEntity.fromObject(yield prisma.notes.update({
                where: {
                    id: note.id
                },
                data: {
                    title: note.title,
                    body: note.body,
                    category: note.category,
                    status: note.status
                }
            }));
        });
    }
    removeNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return note_entity_1.NoteEntity.fromObject(yield prisma.notes.delete({
                where: { id }
            }));
        });
    }
}
exports.PostgresNoteDatasource = PostgresNoteDatasource;
//# sourceMappingURL=postgres-note.datasource.js.map