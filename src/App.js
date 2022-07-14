import { useState } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState({
    onDisplay: false,
    num: 0,
    text: "Roll",
    sides: "",
  });

  const selectSides = (event) => {
    const selected = event.target.value;
    setDice({ ...dice, sides: selected });
  };

  const getRandomDiceNum = () => {
    const numOfSides = Number(dice.sides);
    let num = Math.floor(Math.random() * numOfSides + 1);

    if (num === 1) {
      num = "😭 " + num + " 😭";
    } else if (num === numOfSides) {
      num = "🥳 " + num + " 🥳";
    }

    setDice({ ...dice, onDisplay: true, num: num, text: "Reroll" });
  };

  return (
    <div className="App">
      <h1>Dice Roll App</h1>

      <div className="selectSides">
        <input
          type="radio"
          id="6sides"
          name="sides"
          onChange={selectSides}
          value={6}
        ></input>
        <label htmlFor="6sides">6 sides</label>

        <input
          type="radio"
          id="8sides"
          name="sides"
          onChange={selectSides}
          value={8}
        ></input>
        <label htmlFor="8sides">8 sides</label>

        <input
          type="radio"
          id="10sides"
          name="sides"
          onChange={selectSides}
          value={10}
        ></input>
        <label htmlFor="10sides">10 sides</label>

        <input
          type="radio"
          id="12sides"
          name="sides"
          onChange={selectSides}
          value={12}
        ></input>
        <label htmlFor="12sides">12 sides</label>

        <input
          type="radio"
          id="20sides"
          name="sides"
          onChange={selectSides}
          value={20}
        ></input>
        <label htmlFor="20sides">20 sides</label>
      </div>

      <h1 style={dice.onDisplay ? { color: "white" } : { color: "#408ea4" }}>
        {dice.num}
      </h1>
      <button onClick={getRandomDiceNum}>{dice.text}</button>
    </div>
  );
}

export default App;
