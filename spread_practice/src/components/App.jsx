import { useState } from "react";

function App() {
  const [todoItems, addItem] = useState([]);
  const [todoText, inpText] = useState("");

  function submitted() {
    // const newList = [...todoItems, todoText];
    addItem((prevItems) => {
      return [...prevItems, todoText];
    });
    inpText("");
  }

  function handleChange(event) {
    const newVal = event.target.value;
    inpText(newVal);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todoText} />
        <button onClick={submitted}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
