import { Request, Response } from 'express';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user-impl.repository';
import { PostgresUserDatasource } from '../../infrastructure/datasources/postgres-user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';

export class AuthController {

  readonly userRepo = new UserRepositoryImpl(
    new PostgresUserDatasource()
  );

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const login = await this.userRepo.login(email, password);

    (login instanceof UserEntity) ? res.json(login) : res.status(400).json(login);
  }
}