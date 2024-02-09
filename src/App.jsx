import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
      </div>
      <NotesList />
    </div>
  );
}

export default App;
