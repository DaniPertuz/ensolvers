import { useContext, useEffect, useState } from 'react';
import { NotesContext } from '../../../context/notes';
import { ICategory, INote } from '../../../interfaces/app-interfaces';
import './styles.css';
import { CategoryContext } from '../../../context/categories';
import Modal from '../../Modal';

interface Props {
  note: INote;
}

const NoteItem = ({ note }: Props) => {
  const { title, body, status } = note;

  const { deleteNote } = useContext(NotesContext);
  const { getCategory } = useContext(CategoryContext);

  const [noteCategory, setNoteCategory] = useState<ICategory>();
  const [updateNote, setUpdateNote] = useState(false);

  const handleCategory = async () => {
    const category = await getCategory(note.category!);
    setNoteCategory(category);
  };

  const onUpdate = () => {
    setUpdateNote(true);
  };

  const onDelete = () => {
    deleteNote(note.id!);
  };

  useEffect(() => {
    handleCategory();
  }, [note]);

  return (
    <>
      <div className="note-card">
        <div className="note-card-wrapper">
          <h3 className="card-title fw-bold">{title}</h3>
          <div className="card-body">
            <p className='fw-light'>{body}</p>
          </div>
          <div className="card-category">
            <p className="fst-italic">{noteCategory?.name}</p>
          </div>
          <div className="card-status">
            <p className="fst-italic">{status}</p>
          </div>
          <div className="card-footer">
            <div className="card-actions">
              <div className="action-item">
                <i className="fa-solid fa-pen-to-square" onClick={onUpdate} />
              </div>
              <div className="action-item">
                <i className="fa-solid fa-trash-can delete" onClick={onDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {updateNote && <Modal setOpen={setUpdateNote} note={note} />}
    </>
  );
};

export default NoteItem;