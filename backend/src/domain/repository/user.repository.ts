import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract login(email: string, userPassword: string): Promise<UserEntity | { error: string; }>;
}
