import { ChangeEvent, useEffect, useState } from 'react';
import { ICategory, INote } from '../../interfaces/app-interfaces';
import CategoryItem from '../CategoryItem';
import './styles.css';
import AddCategoryForm from '../AddCategory';

interface Props {
  categories: ICategory[];
  note?: INote;
  handleSelectedCategory: (category: number) => void;
}

const CategoriesList = ({ categories, note, handleSelectedCategory }: Props) => {

  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [showAddCategoryForm, setShowAddCategoryForm] = useState<boolean>(false);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(Number(selectedCategoryId));
    handleSelectedCategory(Number(selectedCategoryId));

    if (selectedCategoryId === '0') {
      setShowAddCategoryForm(true);
    } else {
      setShowAddCategoryForm(false);
    }
  };

  useEffect(() => {
    setSelectedCategory(note?.category);
  }, [note?.category]);

  return (
    <div>
      <select className="form-select" value={selectedCategory} onChange={handleSelectChange}>
        <option value={-1} className='dropdown-item text-dark add-item'>Category</option>
        {categories.map((item, index) => (
          <CategoryItem key={index} item={item} />
        ))}
        <option value={0} className='dropdown-item text-dark add-item'>Add...</option>
      </select>
      {showAddCategoryForm && <AddCategoryForm />}
    </div>
  );
};

export default CategoriesList;