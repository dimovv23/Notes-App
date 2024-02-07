import "./App.css";
import NotSelected from "./components/NotSelected";
import NotesSidebar from "./components/NotesSidebar";
import NewNote from "./components/NewNote";
import { useState } from "react";

function App() {
  const [noteState, setNoteState] = useState({
    notes: [],
    selectedNoteId: undefined,
  });

  function handleAddNoteClick() {
    setNoteState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: null,
      };
    });
  }

  let content;

  if (noteState.selectedNoteId === undefined) {
    content = <NotSelected addNote={handleAddNoteClick} />;
  } else if (noteState.selectedNoteId === null) {
    content = <NewNote />;
  }

  return (
    <div className="main-page">
      <h1>Notes</h1>
      <NotesSidebar addNote={handleAddNoteClick} />
      {content}
    </div>
  );
}

export default App;
