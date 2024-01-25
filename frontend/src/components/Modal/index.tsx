import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../context/categories';
import { NotesContext } from '../../context/notes';
import { ModalProps, ICategory, NoteStatus } from '../../interfaces/app-interfaces';
import CategoriesList from '../CategoriesList';
import { useForm } from '../../hooks';
import './styles.css';

const Modal = ({ setOpen, note }: ModalProps) => {

  const { getCategories } = useContext(CategoryContext);
  const { createNote, updateNote } = useContext(NotesContext);

  const [category, setCategory] = useState<number>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('active');

  const { title, body, status, onChange } = useForm({
    title: (note) ? note.title : '',
    body: (note) ? note.body : '',
    status: (note) ? note.status : NoteStatus.ACTIVE
  });

  const handleCategories = async () => {
    const cats = await getCategories();
    setCategories(cats);
  };

  const handleSelectedCategory = (selected: number) => {
    setCategory(selected);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    setSelectedStatus(filter);
  };

  const handleSaveNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (note) {
      updateNote({
        id: note.id,
        title,
        body,
        category,
        status: selectedStatus as NoteStatus
      });
    } else {
      createNote({
        title,
        body,
        category,
        status
      });
    }

    setOpen(false);
  };

  useEffect(() => {
    handleCategories();
  }, [categories]);

  useEffect(() => {
    if (note) {
      setSelectedStatus(note.status);
    }
  }, []);

  return (
    <div className='add-note-container'>
      <div className="add-note-wrapper">
        <div className="add-note-header">
          <div className="close-btn" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <form className="add-note-form">
          <input type="text" placeholder='Title' name='title' onChange={onChange} value={title} className='form-control' />
          <CategoriesList note={note} categories={categories} handleSelectedCategory={handleSelectedCategory} />
          <textarea className="form-control input-body-note" placeholder="Notes..." name='body' onChange={onChange} value={body}></textarea>
          {note &&
            <select className="form-select" value={selectedStatus} onChange={handleSelectChange}>
              <option value={'active'} className='dropdown-item text-dark add-item'>Active</option>
              <option value={'archived'} className='dropdown-item text-dark add-item'>Archive</option>
            </select>
          }
          <div className="add-note-actions">
            <button className="btn btn-primary bg-gradient rounded-pill" onClick={handleSaveNote}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;