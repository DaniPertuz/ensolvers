import { ICategory } from '../../interfaces/app-interfaces';
import './styles.css';

interface Props {
  categories: ICategory[];
  handleCategories: (categoriesList: ICategory[]) => void;
}

const SelectedCategories = ({ categories, handleCategories }: Props) => {
  const onDelete = (item: ICategory) => {
    const updatedCategories = categories.filter(category => category !== item);
    handleCategories(updatedCategories);
  };

  return (
    <div>
      {categories.map((selectedCategory, index) => (
        <div key={index} className='item-container'>
          <h6 className='mx-2 my-3'>{selectedCategory?.name}</h6>
          <div className='item-pointer' onClick={() => onDelete(selectedCategory)}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedCategories;