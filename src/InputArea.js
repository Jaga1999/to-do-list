import React, { useState } from "react";

const InputArea = ({ addItems }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    if (inputText === "") {
      alert("Please Enter some Input");
      return;
    }
    addItems(inputText);
    setInputText("");
  };

  return (
    <div className="inputField">
      <input
        type="text"
        placeholder="What you want to do?"
        onChange={handleChange}
        value={inputText}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputArea;
