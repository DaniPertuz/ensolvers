import { NoteEntity } from '../entities/note.entity';

export abstract class NoteDatasource {
  abstract createNote(note: NoteEntity): Promise<NoteEntity | null>;
  abstract getNotes(): Promise<NoteEntity[]>;
  abstract getNote(id: number): Promise<NoteEntity | null>;
  abstract getNotesByCategory(category: string): Promise<NoteEntity[]>;
  abstract getNotesByStatus(status: string): Promise<NoteEntity[]>;
  abstract updateNote(note: NoteEntity): Promise<NoteEntity | null>;
  abstract removeNote(id: number): Promise<NoteEntity | null>;
}