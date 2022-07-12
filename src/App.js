import React, { useState } from "react";
import "./App.css";
import CheckboxInput from "./CheckboxInput";

const App = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const handleAllSelectClick = () => {
    setIsAllSelected(!isAllSelected);
  }
  return (
    <div className="App">
      Select All: <input type="checkbox" onClick={handleAllSelectClick} />
      {[...Array(20)].map((indx, val) => (
        <CheckboxInput value={val} isAllSelected={isAllSelected} setIsAllSelected={setIsAllSelected} />
      ))}
    </div>
  );
}

export default App;
