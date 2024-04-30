import { useState } from "react";
import "../App.css";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [items, addItem] = useState([]);
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handleText(event) {
    const name = event.target.name;
    const newVal = event.target.value;

    if (name === "title") {
      setItem((prevItems) => {
        return {
          title: newVal,
          content: prevItems.content,
        };
      });
    } else if (name === "content") {
      setItem((prevItems) => {
        return {
          title: prevItems.title,
          content: newVal,
        };
      });
    }
  }

  function handleClick(event) {
    event.preventDefault();

    addItem((prevItems) => {
      return [...prevItems, item];
    });

    setItem(() => {
      return {
        title: "",
        content: "",
      };
    });
  }

  function handleDelete(id) {
    addItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header></Header>
      <CreateArea
        onSub={handleClick}
        onInput={handleText}
        title={item.title}
        content={item.content}
      />
      {items.map((noteI, index) => (
        <Note
          id={index}
          key={index}
          title={noteI.title}
          content={noteI.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
