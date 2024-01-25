import { createContext } from 'react';
import { ICategory } from '../../interfaces/app-interfaces';

type CategoryContextProps = {
  categories: ICategory[];
  getCategories: () => Promise<ICategory[]>;
  getCategory: (id: number) => Promise<ICategory>;
  createCategory: (name: string) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
};

export const CategoryContext = createContext({} as CategoryContextProps);