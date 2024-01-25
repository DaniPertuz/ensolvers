import { Router } from 'express';
import { NotesController } from './controller';

export class NoteRoutes {
  static get routes(): Router {
    const router = Router();

    const { getNotes, getNotesByCategory, getNotesByStatus, getNoteById, createNote, updateNote, deleteNote } = new NotesController();

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