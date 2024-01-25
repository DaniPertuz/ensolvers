import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import NotesList from '../../components/notes/NotesList';
import { ICategory } from '../../interfaces/app-interfaces';
import './app.css';
import { CategoryContext } from '../../context/categories';

const MainPage = () => {
  const { getCategories } = useContext(CategoryContext);

  const [onCreateNote, setOnCreateNote] = useState(false);
  const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
  };

  const handleSelectChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    setCategoryFilter(filter);
  };

  const handleCategoriesList = async () => {
    const list = await getCategories();
    setCategoriesList(list);
  };

  useEffect(() => {
    handleCategoriesList();
  }, []);

  return (
    <div className="app">
      <Navbar setOpen={setOnCreateNote} />
      <div className="wrapper main-container">
        <div className="container">
          <select className='form-select m-3 w-25' value={selectedFilter} onChange={handleSelectChange}>
            <option value={'all'}>Status...</option>
            <option value={'active'}>Active</option>
            <option value={'archived'}>Archived</option>
          </select>
          <select className='form-select m-3 w-25' value={categoryFilter} onChange={handleSelectChangeCategory}>
            <option value={'all'}>Categories...</option>
            {categoriesList.map((category, index) => (
              <option key={index} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="notes-wrapper mt-5">
          <NotesList selectedFilter={selectedFilter} categoryFilter={categoryFilter} />
        </div>
        {onCreateNote && <Modal setOpen={setOnCreateNote} />}
      </div>
    </div>
  );
};

export default MainPage;