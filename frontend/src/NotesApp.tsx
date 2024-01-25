import { AuthProvider } from './context/auth';
import { CategoryProvider } from './context/categories';
import { NotesProvider } from './context/notes';
import { AppRouter } from './router/AppRouter';

function NotesApp() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <NotesProvider>
          <AppRouter />
        </NotesProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default NotesApp;
