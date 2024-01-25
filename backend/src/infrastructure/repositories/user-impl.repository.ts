import { UserDatasource } from '../../domain/datasources/user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repository/user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly userDatasource: UserDatasource
  ) { }

  login(email: string, password: string): Promise<UserEntity | { error: string; }> {
    return this.userDatasource.login(email, password);
  }
}