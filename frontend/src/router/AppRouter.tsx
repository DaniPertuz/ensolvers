import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { AuthRoutes } from './auth/AuthRoutes';
import MainPage from '../pages/main/MainPage';

export const AppRouter = () => {
  const { status } = useContext(AuthContext);

  return (
    <Routes>
      {status === 'authenticated'
        ? <Route path='/*' element={<MainPage />} />
        : <Route path='auth/*' element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  );
};
