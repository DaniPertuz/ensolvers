
export class CategoryEntity {

  constructor(
    public id: number,
    public name: string
  ) { }

  static fromObject = (object: { [key: string]: any; }): CategoryEntity => {
    const { id, name } = object;
    const category = new CategoryEntity(id, name);
    return category;
  };
}