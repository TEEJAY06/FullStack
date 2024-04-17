import { useState } from "react";

import Heading from "./components/Heading.jsx";
import List from "./components/List.jsx";
import Greeting from "./components/Greeting.jsx";

import x from "./components/math.js";
console.log(x);

function App() {
  return (
    <div>
      <Greeting></Greeting>
      <Heading />
      <List />
    </div>
  );
}

export default App;
