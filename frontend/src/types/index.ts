import { INote } from '../interfaces/app-interfaces';

export type AuthAction =
  | { type: 'login', payload: { user: string; }; }
  | { type: 'addError', payload: string; }
  | { type: 'removeError'; }
  | { type: 'notAuthenticated'; }
  | { type: 'logout'; };

export type CategoryAction =
  | { type: 'addCategory', payload: { name: string; }; }
  | { type: 'deleteCategory', payload: { id: number; }; };

export type NoteAction =
  | { type: 'addNote', payload: { note: INote; }; }
  | { type: 'updateNote', payload: { note: INote; }; }
  | { type: 'deleteNote', payload: { id: number; }; };