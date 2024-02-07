import noteImage from "../assets/note.svg";

export default function NotSelected({ addNote }) {
  return (
    <div className="not-selected">
      <h2>No Notes Selected</h2>
      <h3>Slect a note or get started with a new one</h3>
      <button onClick={addNote}>
        <img src={noteImage} alt="" />
      </button>
    </div>
  );
}
