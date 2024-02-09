import { MdDeleteSweep } from "react-icons/md";

export default function Note() {
  return (
    <div className="note">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec diam
        iaculis, laoreet massa in, feugiat mauris. Nulla facilisi. Vestibulum
        commodo eleifend ante sed auctor. Sed nisl magna, rutrum eget ante
        vitae, consequat ultricies augue. Donec ultrices ultrices mauris vitae.
      </p>
      <div className="note-footer">
        <span>//date</span>
        <button>
          <MdDeleteSweep className="delete-icon" size="1.3rem" />
        </button>
      </div>
    </div>
  );
}
