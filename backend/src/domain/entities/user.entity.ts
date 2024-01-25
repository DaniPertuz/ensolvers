
export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string
  ) {}

  static fromObject = (object: { [key: string]: any; }): UserEntity => {
    const { id, email, password, name } = object;
    const user = new UserEntity(id, email, password, name);
    return user;
  };
}