import { useState } from "react";
import "../App.css";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header></Header>
      {notes.map((noteI) => (
        <Note key={noteI.key} title={noteI.title} content={noteI.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
