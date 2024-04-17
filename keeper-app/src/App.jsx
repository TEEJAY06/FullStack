import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header></Header>
      <Note></Note>
      <Footer></Footer>
    </div>
  );
}

export default App;
