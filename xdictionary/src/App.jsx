import ract, { useState } from "react";
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
  const [defination, setDefination] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = data.find(
      (val) => val.word.toLowerCase() === input.toLowerCase()
    );
    setDefination(result ? result.meaning : "Word not found in the dictionary");
  };
  return (
    <div>
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <form onClick={handleSubmit}>
          <span>
            {" "}
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder="search for a word..."
            />{" "}
            <button type="submit">search</button>{" "}
          </span>
          <p>Defination:</p>

          <p>{input ? defination : ""}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
