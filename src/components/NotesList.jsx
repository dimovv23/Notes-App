import { useState } from "react";
import Note from "./Note";

export default function NotesList() {
  const [notesState, setNotesState] = useState({
    notes: [],
  });

  function handleAddNote(noteData) {
    setNotesState((prevState) => {
      const noteId = Math.random();
      const newNote = {
        ...noteData,
        id: noteId,
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
        <Note key={note.id} content={note.noteContent} />
      ))}
    </div>
  );
}
