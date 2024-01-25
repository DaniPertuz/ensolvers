import { PrismaClient } from '@prisma/client';
import { NoteDatasource } from '../../domain/datasources/note.datasource';
import { NoteEntity } from '../../domain/entities/note.entity';
import { NoteStatus } from '../../interfaces';

const prisma = new PrismaClient();

export class PostgresNoteDatasource implements NoteDatasource {
  async createNote(note: NoteEntity): Promise<NoteEntity | null> {
    const { id, title, body, category } = note;

    if (!category || isNaN(category)) return null;

    const categoryDB = await prisma.category.findFirst({
      where: {
        id: category
      }
    });

    if (!categoryDB) return null;

    return NoteEntity.fromObject(
      await prisma.notes.create({
        data: { id, title, body, category, status: 'active' }
      })
    );
  }

  async getNotes(): Promise<NoteEntity[]> {
    const notes = await prisma.notes.findMany({
      orderBy: [
        { id: 'asc' }
      ]
    });
    return notes.map(NoteEntity.fromObject);
  }

  async getNote(id: number): Promise<NoteEntity | null> {
    if (isNaN(id)) return null;

    const note = await prisma.notes.findFirst({
      where: { id }
    });

    return note ? NoteEntity.fromObject(note) : null;
  }

  async getNotesByCategory(category: string): Promise<NoteEntity[]> {
    const categoryDB = await prisma.category.findFirst({
      where: {
        name: category
      }
    });

    const notes = await prisma.notes.findMany({
      where: {
        category: categoryDB?.id
      }
    });

    return notes.map(NoteEntity.fromObject);
  }

  async getNotesByStatus(status: string): Promise<NoteEntity[]> {
    const notes = await prisma.notes.findMany({
      where: {
        status: status as NoteStatus
      }
    });

    return notes.map(NoteEntity.fromObject);
  }

  async updateNote(note: NoteEntity): Promise<NoteEntity | null> {
    return NoteEntity.fromObject(await prisma.notes.update({
      where: {
        id: note.id
      },
      data: {
        title: note.title,
        body: note.body,
        category: note.category,
        status: note.status as NoteStatus
      }
    }));
  }

  async removeNote(id: number): Promise<NoteEntity | null> {
    return NoteEntity.fromObject(await prisma.notes.delete({
      where: { id }
    }));
  }
}