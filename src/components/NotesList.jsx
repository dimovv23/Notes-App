import { useState } from "react";
import Note from "./Note";

export default function NotesList() {
  const [notesState, setNotesState] = useState({
    notes: [],
  });

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
      {notesState.notes.map((note) => (
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
