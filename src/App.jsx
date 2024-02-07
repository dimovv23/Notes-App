import "./App.css";
import NotSelected from "./components/NotSelected";
import NotesSidebar from "./components/NotesSidebar";

function App() {
  return (
    <div className="main-page">
      <h1>Notes</h1>
      <NotesSidebar />
      <NotSelected />
    </div>
  );
}

export default App;
