import { Router } from 'express';
import { AuthController } from './controller';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const { login } = new AuthController();

    router.post('/login', login);

    return router;
  }
}