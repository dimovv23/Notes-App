import { MdDeleteSweep } from "react-icons/md";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Note({
  content,
  input = false,
  onAdd,
  onDelete,
  id,
  date,
}) {
  const userInput = useRef();
  const [charCount, setCharCount] = useState(0);
  const charLimit = 200;
  const modal = useRef();

  function handleInputChange(event) {
    const userInputValue = event.target.value;
    setCharCount(userInputValue.length);
  }

  function handleSave() {
    const userContent = userInput.current.value;

    if (userContent.trim() === "") {
      //TODO: Modal for error message
      modal.current.open();
      return;
    }

    onAdd({
      noteContent: userContent,
    });

    userInput.current.value = "";
    setCharCount(0);
  }

  return (
    <div>
      <Modal ref={modal} buttonCaption={"Close"}>
        <h2>Oops...</h2>
        <p>Looks like forgot to enter text for your note.</p>
      </Modal>
      {!input && (
        <div className="note">
          {" "}
          <p>{content}</p>
          <div className="note-footer">
            <span>{date}</span>
            <button onClick={() => onDelete(id)}>
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
            maxLength={charLimit}
            onChange={handleInputChange}
          ></textarea>
          <div className="note-footer">
            <span>
              {charLimit - charCount}/{charLimit}
            </span>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
