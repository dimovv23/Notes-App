import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  return (
    <>
      <div className="header">
        <h1>Notes</h1>
      </div>
      <NotesList />
    </>
  );
}

export default App;
