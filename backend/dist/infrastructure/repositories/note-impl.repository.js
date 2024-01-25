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
exports.NoteRepositoryImpl = void 0;
class NoteRepositoryImpl {
    constructor(noteDatasource) {
        this.noteDatasource = noteDatasource;
    }
    createNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.createNote(note);
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.getNotes();
        });
    }
    getNotesByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.getNotesByCategory(category);
        });
    }
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.getNote(id);
        });
    }
    getNotesByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.getNotesByStatus(status);
        });
    }
    updateNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.updateNote(note);
        });
    }
    removeNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noteDatasource.removeNote(id);
        });
    }
}
exports.NoteRepositoryImpl = NoteRepositoryImpl;
//# sourceMappingURL=note-impl.repository.js.map