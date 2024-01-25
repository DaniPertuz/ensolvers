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
exports.NotesController = void 0;
const note_impl_repository_1 = require("../../../infrastructure/repositories/note-impl.repository");
const postgres_note_datasource_1 = require("../../../infrastructure/datasources/postgres-note.datasource");
class NotesController {
    constructor() {
        this.noteRepo = new note_impl_repository_1.NoteRepositoryImpl(new postgres_note_datasource_1.PostgresNoteDatasource());
        this.getNotes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const notes = yield this.noteRepo.getNotes();
            return res.json(notes);
        });
        this.getNotesByStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const status = req.params.status;
            const notes = yield this.noteRepo.getNotesByStatus(status);
            return res.json(notes);
        });
        this.getNotesByCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const category = req.params.category;
            const notes = yield this.noteRepo.getNotesByCategory(category);
            return res.json(notes);
        });
        this.getNoteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const note = yield this.noteRepo.getNote(id);
            return (note) ? res.json(note) : res.status(404).json({ error: 'Note not found' });
        });
        this.createNote = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, title, body, category, status } = req.body;
            const note = yield this.noteRepo.createNote({ id, title, body, category, status });
            return (note) ? res.json(note) : res.status(404).json({ error: 'Category is not valid' });
        });
        this.updateNote = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const { title, body, category, status } = req.body;
            const note = yield this.noteRepo.updateNote({ id, title, body, category, status });
            return res.json(note);
        });
        this.deleteNote = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const note = yield this.noteRepo.removeNote(id);
            return res.json({ removed: note });
        });
    }
}
exports.NotesController = NotesController;
//# sourceMappingURL=controller.js.map