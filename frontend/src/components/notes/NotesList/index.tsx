import { useContext, useEffect, useState } from 'react';
import { INote } from '../../../interfaces/app-interfaces';
import NoteItem from '../NoteItem';
import { NotesContext } from '../../../context/notes';

interface Props {
  selectedFilter: string;
  categoryFilter: string;
}

const NotesList = ({ selectedFilter, categoryFilter }: Props) => {

  const { getNotes, getNotesByStatus, getNotesByCategory } = useContext(NotesContext);
  
  const [notesList, setNotesList] = useState<INote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedFilter === 'all' && categoryFilter === 'all') {
        const notes = await getNotes();
        setNotesList(notes);
      } else if (selectedFilter === 'all') {
        const notes = await getNotesByCategory(categoryFilter);
        setNotesList(notes);
      } else if (categoryFilter === 'all') {
        const notes = await getNotesByStatus(selectedFilter);
        setNotesList(notes);
      }
    };

    fetchData();
  }, [selectedFilter, categoryFilter, notesList]);

  return (
    <div>
      {notesList.map((note, index) => (
        <NoteItem note={note} key={index} />
      ))}
    </div>
  );
};

export default NotesList;