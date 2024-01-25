import { createContext } from 'react';
import { INote } from '../../interfaces/app-interfaces';

type NotesContextProps = {
  notes: INote[];
  getNotes: () => Promise<INote[]>;
  getNote: (id: number) => Promise<INote>;
  getNotesByCategory: (category: string) => Promise<INote[]>;
  getNotesByStatus: (status: string) => Promise<INote[]>;
  createNote: (note: INote) => Promise<void>;
  updateNote: (note: INote) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
};

export const NotesContext = createContext({} as NotesContextProps);