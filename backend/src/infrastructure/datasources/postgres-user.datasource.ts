import { PrismaClient } from '@prisma/client';
import { UserDatasource } from '../../domain/datasources/user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';
import { bcryptAdapter } from '../../plugins';

const prisma = new PrismaClient();

export class PostgresUserDatasource implements UserDatasource {
  async login(email: string, userPassword: string): Promise<UserEntity | { error: string; }> {
    const userDB = await prisma.user_notes.findFirst({
      where: { email }
    });

    if (!userDB) return { error: 'User not found' };

    const isMatching = bcryptAdapter.compare(userPassword, userDB.password);

    if (!isMatching) return { error: 'Password is not valid' };

    const userEntity: Omit<UserEntity, 'password'> & { password?: string; } = {
      id: userDB.id,
      email: userDB.email,
      name: userDB.name
    };

    return UserEntity.fromObject(userEntity);
  }
}