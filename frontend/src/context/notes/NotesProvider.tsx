import { useReducer } from 'react';
import { NotesReducer, NotesContext } from '.';
import { ICategory, INote, NotesState } from '../../interfaces/app-interfaces';
import notesAPI from '../../api';

const NOTES_INITIAL_STATE: NotesState = {
  notes: []
};

export const NotesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(NotesReducer, NOTES_INITIAL_STATE);

  const getNotes = async (): Promise<INote[]> => {
    try {
      const { data } = await notesAPI.get<INote[]>('/notes');
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const getNote = async (id: number): Promise<INote> => {
    try {
      const { data } = await notesAPI.get<INote>(`/notes/${id}`);
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const getNotesByStatus = async (status: string) => {
    try {
      const { data } = await notesAPI.get<INote[]>(`/notes/status/${status}`);
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const getNotesByCategory = async (category: string) => {
    try {
      const { data } = await notesAPI.get<INote[]>(`/notes/category/${category}`);
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const createNote = async (note: INote): Promise<void> => {
    try {
      const { data } = await notesAPI.post<ICategory>('/notes', note);

      if (data) {
        dispatch({
          type: 'addNote',
          payload: { note }
        });
      }
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const updateNote = async (note: INote) => {
    try {
      const { data } = await notesAPI.put<INote>(`/notes/${note.id}`, note);

      if (data) {
        dispatch({
          type: 'updateNote',
          payload: { note }
        });
      }
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const deleteNote = async (id: number): Promise<void> => {
    try {
      const { data } = await notesAPI.delete<ICategory>(`/categories${id}`);

      if (data) {
        dispatch({
          type: 'deleteNote',
          payload: { id }
        });
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <NotesContext.Provider value={{
      ...state,
      getNotes,
      getNote,
      getNotesByCategory,
      getNotesByStatus,
      createNote,
      updateNote,
      deleteNote
    }}
    >
      {children}
    </NotesContext.Provider>
  );
};