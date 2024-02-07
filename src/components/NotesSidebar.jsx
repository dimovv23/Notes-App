export default function NotesSidebar({ addNote }) {
  return (
    <div className="notes-sidebar">
      <button onClick={addNote}>+ Add Note</button>
      <div>//display notes</div>
    </div>
  );
}
