import { useState } from "react";
import TodoItem from "./TodoItem.jsx";

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

  function deleteItem(id) {
    addItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {todoItems.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onClicked={deleteItem}
            ></TodoItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
