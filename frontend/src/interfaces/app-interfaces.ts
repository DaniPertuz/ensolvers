export enum NoteStatus {
  ARCHIVED = 'archived',
  ACTIVE = 'active'
}

export interface ModalProps {
  setOpen: (open: boolean) => void;
  note?: INote;
}

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: string;
  errorMessage: string;
}

export interface CategoryState {
  categories: ICategory[];
}

export interface NotesState {
  notes: INote[];
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface INote {
  id?: number;
  title: string;
  body: string;
  category?: number;
  status: NoteStatus;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}