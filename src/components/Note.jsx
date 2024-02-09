import { MdDeleteSweep } from "react-icons/md";
import { useRef } from "react";

export default function Note({ content, input = false, onAdd }) {
  const userInput = useRef();

  function handleSave() {
    const userContent = userInput.current.value;

    if (userContent.trim() === "") {
      //TODO: Modal for error message
      return;
    }

    onAdd({
      noteContent: userContent,
    });

    userInput.current.value = "";
  }

  return (
    <div>
      {!input && (
        <div className="note">
          {" "}
          <p>{content}</p>
          <div className="note-footer">
            <span>//date</span>
            <button>
              <MdDeleteSweep className="delete-icon" size="1.3rem" />
            </button>
          </div>
        </div>
      )}
      {input && (
        <div className={input ? "new-note" : "note"}>
          {" "}
          <textarea
            ref={userInput}
            name=""
            id=""
            cols="32"
            rows="10"
            placeholder="Start typping to add a note..."
          ></textarea>
          <div className="note-footer">
            <span>//brChar</span>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
