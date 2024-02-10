import { FaSearch } from "react-icons/fa";

export default function Search({ onSearch }) {
  return (
    <div className="search">
      <FaSearch
        style={{
          backgroundColor: "transparent",
          color: "#08090a",
        }}
        size={"1.3rem"}
      />
      <input
        onChange={(event) => onSearch(event.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
}
