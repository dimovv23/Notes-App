import { useState } from "react";
import Note from "./Note";

export default function NotesList({ searchData }) {
  const [notesState, setNotesState] = useState({
    notes: [],
  });

  const filteredNotes = notesState.notes.filter((note) =>
    note.noteContent.toLowerCase().includes(searchData.toLowerCase())
  );

  function handleDelete(id) {
    setNotesState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  function handleAddNote(noteData) {
    setNotesState((prevState) => {
      const noteId = Math.random();
      const noteDate = new Date().toLocaleDateString("en-GB");
      const newNote = {
        ...noteData,
        id: noteId,
        date: noteDate,
      };
      return {
        ...prevState,
        notes: [newNote, ...prevState.notes],
      };
    });
  }

  return (
    <div className="notes-list">
      <Note input={true} onAdd={handleAddNote}></Note>
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          content={note.noteContent}
          id={note.id}
          date={note.date}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
