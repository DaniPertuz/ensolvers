import { createContext } from 'react';
import { LoginData } from '../../interfaces/app-interfaces';

type AuthContextProps = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: string;
  errorMessage: string;
  login: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);