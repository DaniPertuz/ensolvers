import { AuthState } from '../../interfaces/app-interfaces';
import { AuthAction } from '../../types';

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        status: 'not-authenticated',
        user: '',
        errorMessage: action.payload
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: ''
      };

    case 'login':
      return {
        ...state,
        status: 'authenticated',
        user: action.payload.user,
        errorMessage: ''
      };

    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        user: ''
      };

    default:
      return state;
  }
};
