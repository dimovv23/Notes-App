import Search from "./Search.jsx";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Header({ setSearchData, handleToggle, currentMode }) {
  return (
    <div className="header">
      <h1>
        n
        <span
          style={{
            color: "#0dfdb1",
          }}
        >
          o
        </span>
        tes
      </h1>
      <Search onSearch={setSearchData} />
      <button
        onClick={() => handleToggle((prevMode) => !prevMode)}
        style={{
          backgroundColor: "transparent",
          margin: "0.5rem",
          borderRadius: "10px",
          border: "none",
        }}
      >
        {currentMode && <MdLightMode size={"1.6rem"} color="#f4faff" />}
        {!currentMode && <MdDarkMode size={"1.6rem"} color="#08090a" />}
      </button>
    </div>
  );
}
