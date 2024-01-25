"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class NoteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const { getNotes, getNotesByCategory, getNotesByStatus, getNoteById, createNote, updateNote, deleteNote } = new controller_1.NotesController();
        router.get('/', getNotes);
        router.get('/category/:category', getNotesByCategory);
        router.get('/status/:status', getNotesByStatus);
        router.get('/:id', getNoteById);
        router.post('/', createNote);
        router.put('/:id', updateNote);
        router.delete('/:id', deleteNote);
        return router;
    }
}
exports.NoteRoutes = NoteRoutes;
//# sourceMappingURL=routes.js.map