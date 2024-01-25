import { CategoryEntity } from '../entities/category.entity';

export abstract class CategoryRepository {
  abstract getCategories(): Promise<CategoryEntity[]>;
  abstract getCategory(id: number): Promise<CategoryEntity | null>;
  abstract createCategory(name: string): Promise<CategoryEntity | null>;
  abstract removeCategory(id: number): Promise<CategoryEntity | null>;
}