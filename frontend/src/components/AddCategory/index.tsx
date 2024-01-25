import { useContext, useState } from 'react';
import { CategoryContext } from '../../context/categories';
import { useForm } from '../../hooks';

const AddCategoryForm = () => {
  const { createCategory } = useContext(CategoryContext);

  const [display, setDisplay] = useState(true);

  const { name, onChange } = useForm({
    name: ''
  });

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    createCategory(name);
    setDisplay(false);
  };

  return (
    <div style={{ display: (display) ? 'block' : 'none' }}>
      <input
        className='form-control mt-4'
        name='name'
        onChange={onChange}
        placeholder='New category...'
        type="text"
        value={name}
      />
      <button className='btn btn-success bg-gradient rounded-pill mt-2' onClick={onSubmit}>Save</button>
    </div>
  );
};

export default AddCategoryForm; 