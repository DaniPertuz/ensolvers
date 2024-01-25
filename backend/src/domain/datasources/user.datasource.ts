import { UserEntity } from '../entities/user.entity';

export abstract class UserDatasource {
  abstract login(email: string, userPassword: string): Promise<UserEntity | { error: string; }>;
}