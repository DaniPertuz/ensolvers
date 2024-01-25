import { NoteDatasource } from '../../domain/datasources/note.datasource';
import { NoteEntity } from '../../domain/entities/note.entity';
import { NoteRepository } from '../../domain/repository/note.repository';

export class NoteRepositoryImpl implements NoteRepository {
  constructor(
    private readonly noteDatasource: NoteDatasource
  ) { }

  async createNote(note: NoteEntity): Promise<NoteEntity | null> {
    return this.noteDatasource.createNote(note);
  }

  async getNotes(): Promise<NoteEntity[]> {
    return this.noteDatasource.getNotes();
  }

  async getNotesByCategory(category: string): Promise<NoteEntity[]> {
    return this.noteDatasource.getNotesByCategory(category);
  }

  async getNote(id: number): Promise<NoteEntity | null> {
    return this.noteDatasource.getNote(id);
  }

  async getNotesByStatus(status: string): Promise<NoteEntity[]> {
    return this.noteDatasource.getNotesByStatus(status);
  }

  async updateNote(note: NoteEntity): Promise<NoteEntity | null> {
    return this.noteDatasource.updateNote(note);
  }

  async removeNote(id: number): Promise<NoteEntity | null> {
    return this.noteDatasource.removeNote(id);
  }
}