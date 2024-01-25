import { ICategory } from '../../interfaces/app-interfaces';
import './styles.css';

interface Props {
  item: ICategory;
}

const CategoryItem = ({ item }: Props) => {
  return (
      <option value={item.id} className='dropdown-item text-dark item-container item-pointer w-100'>
        {item.name}
      </option>
  );
};

export default CategoryItem;