import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/auth';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};