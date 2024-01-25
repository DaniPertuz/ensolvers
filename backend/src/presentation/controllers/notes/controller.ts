import { Request, Response } from 'express';
import { NoteRepositoryImpl } from '../../../infrastructure/repositories/note-impl.repository';
import { PostgresNoteDatasource } from '../../../infrastructure/datasources/postgres-note.datasource';

export class NotesController {

  readonly noteRepo = new NoteRepositoryImpl(
    new PostgresNoteDatasource()
  );

  public getNotes = async (req: Request, res: Response) => {
    const notes = await this.noteRepo.getNotes();

    return res.json(notes);
  };

  public getNotesByStatus = async (req: Request, res: Response) => {
    const status = req.params.status;

    const notes = await this.noteRepo.getNotesByStatus(status);

    return res.json(notes);
  };

  public getNotesByCategory = async (req: Request, res: Response) => {
    const category = req.params.category;

    const notes = await this.noteRepo.getNotesByCategory(category);

    return res.json(notes);
  };

  public getNoteById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const note = await this.noteRepo.getNote(id);

    return (note) ? res.json(note) : res.status(404).json({ error: 'Note not found' });
  };

  public createNote = async (req: Request, res: Response) => {
    const { id, title, body, category, status } = req.body;

    const note = await this.noteRepo.createNote({ id, title, body, category, status });

    return (note) ? res.json(note) : res.status(404).json({ error: 'Category is not valid' });
  };

  public updateNote = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const { title, body, category, status } = req.body;

    const note = await this.noteRepo.updateNote({ id, title, body, category, status });

    return res.json(note);
  };

  public deleteNote = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const note = await this.noteRepo.removeNote(id);

    return res.json({ removed: note });
  };
}