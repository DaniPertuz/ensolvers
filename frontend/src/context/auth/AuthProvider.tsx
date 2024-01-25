import { useEffect, useReducer } from 'react';
import { AuthContext, AuthReducer } from '.';
import { AuthState, LoginData } from '../../interfaces/app-interfaces';
import notesAPI from '../../api';

const AUTH_INITIAL_STATE: AuthState = {
  status: 'checking',
  user: '',
  errorMessage: ''
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    validateLogin();
}, []);

  const validateLogin = async () => {
    const user = localStorage.getItem('user');

    if (!user) return dispatch({ type: 'notAuthenticated' });

    localStorage.setItem('user', user);

    dispatch({
      type: 'login',
      payload: {
        user
      }
    });
  };

  const login = async ({ email, password }: LoginData): Promise<void> => {
    try {
      const { data } = await notesAPI.post('/auth/login', { email, password });

      const { user } = data;

      dispatch({
        type: 'login',
        payload: { user }
      });

      localStorage.setItem('user', data.email);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: 'Wrong credentials. Try again.'
      });
    }
  };

  const logOut = async (): Promise<void> => {
    localStorage.removeItem('user');
    dispatch({ type: 'logout' });
  };

  const removeError = (): void => {
    dispatch({ type: 'removeError' });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logOut,
      removeError
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};