import cors from 'cors';
import { AuthRoutes } from './auth/routes';
import { CategoriesRoutes } from './controllers/categories/routes';
import { NoteRoutes } from './controllers/notes/routes';
import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use(cors());

    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoriesRoutes.routes);
    router.use('/api/notes', NoteRoutes.routes);

    return router;
  }
}