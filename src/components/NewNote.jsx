export default function NewNote() {
  return (
    <div className="new-note">
      <div>
        <label>Title</label>
        <span>
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </span>
      </div>
      <input type="text" />
      <label>Content</label>
      <textarea name="" id="" cols="100%" rows="10"></textarea>
    </div>
  );
}
