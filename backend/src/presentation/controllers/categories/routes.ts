import { Router } from 'express';
import { CategoriesController } from './controller';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();

    const { createCategory, deleteCategory, getCategories, getCategory } = new CategoriesController();

    router.get('/', getCategories);
    router.get('/:id', getCategory);
    router.post('/', createCategory);
    router.delete('/:id', deleteCategory);

    return router;
  }
}