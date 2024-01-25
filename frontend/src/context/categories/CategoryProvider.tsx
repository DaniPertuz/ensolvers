import { useReducer } from 'react';
import { CategoryState, ICategory } from '../../interfaces/app-interfaces';
import { CategoryReducer } from './CategoryReducer';
import { CategoryContext } from './CategoryContext';
import notesAPI from '../../api';


const CATEGORY_INITIAL_STATE: CategoryState = {
  categories: []
};

export const CategoryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(CategoryReducer, CATEGORY_INITIAL_STATE);

  const getCategories = async (): Promise<ICategory[]> => {
    try {
      const { data } = await notesAPI.get<ICategory[]>('/categories');
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const getCategory = async (id: number): Promise<ICategory> => {
    try {
      const { data } = await notesAPI.get<ICategory>(`/categories/${id}`);
      return data;
    } catch (error: any) {
      throw new Error(`${error}`);
    }
  };

  const createCategory = async (name: string): Promise<void> => {
    try {
      const { data } = await notesAPI.post<ICategory>('/categories', { name });

      if (data) {
        dispatch({
          type: 'addCategory',
          payload: { name }
        });
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const deleteCategory = async (id: number): Promise<void> => {
    try {
      const { data } = await notesAPI.delete<ICategory>(`/categories/${id}`);

      if (data) {
        dispatch({
          type: 'deleteCategory',
          payload: { id }
        });
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <CategoryContext.Provider value={{
      ...state,
      getCategories,
      getCategory,
      createCategory,
      deleteCategory
    }}
    >
      {children}
    </CategoryContext.Provider>
  );
};