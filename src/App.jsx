import "./App.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
      }}
      className={darkMode ? "dark" : "frost"}
    >
      <div className="container">
        <Header
          setSearchData={setSearchData}
          handleToggle={setDarkMode}
          currentMode={darkMode}
        />
        <NotesList searchData={searchData} />
      </div>
    </div>
  );
}

export default App;
