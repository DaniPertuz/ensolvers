import { CategoryState, ICategory } from '../../interfaces/app-interfaces';
import { CategoryAction } from '../../types';

export const CategoryReducer = (state: CategoryState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case 'addCategory':
      const newCategory: ICategory = {
        name: action.payload.name
      };
      return {
        ...state,
        categories: [...state.categories, newCategory]
      };
    case 'deleteCategory':
      return {
        ...state,
        categories: state.categories.filter(cat => cat.id !== action.payload.id)
      };
    default:
      return state;
  }
};