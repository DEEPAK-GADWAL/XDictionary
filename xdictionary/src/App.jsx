import React, { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (input.trim() === "") {
      setDefinition("Word not found in the dictionary.");
      return;
    }
    const result = data.find(
      (val) => val.word.toLowerCase() === input.toLowerCase()
    );
    setDefinition(result ? result.meaning : "The word not found in dictionary");
  };

  return (
    <div>
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <span>
            <input
              onChange={(e) => {
                setInput(e.target.value);
                setSubmitted(false); // Reset submitted state while typing
              }}
              type="text"
              value={input}
              placeholder="Search for a word..."
            />
            <button type="submit">Search</button>
          </span>
          <p>Definition:</p>
          {submitted && <p>{definition}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
