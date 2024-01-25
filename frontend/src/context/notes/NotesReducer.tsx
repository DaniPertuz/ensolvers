import { INote, NotesState } from '../../interfaces/app-interfaces';
import { NoteAction } from '../../types';

export const NotesReducer = (state: NotesState, action: NoteAction): NotesState => {
  switch (action.type) {
    case 'addNote':
      const { title, body, category, status } = action.payload.note;
      const newNote: INote = {
        title,
        body,
        category,
        status
      };
      return {
        ...state,
        notes: [...state.notes, newNote]
      };
    case 'updateNote':
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.payload.note.id ? action.payload.note : note))
      };
    case 'deleteNote':
      return {
        ...state,
        notes: state.notes.filter(cat => cat.id !== action.payload.id)
      };
    default:
      return state;
  }
};