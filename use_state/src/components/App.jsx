import { useState } from "react";
import React from "react";
import "../App.css";

// function App() {
//   const [state, setState] = useState(0);

//   function add() {
//     setState(state + 1);
//   }

//   function minus() {
//     setState(state - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{state}</h1>
//       <button onClick={add}>+</button>
//       <button onClick={minus}>-</button>
//     </div>
//   );
// }

// let time = new Date().toLocaleTimeString();
// console.log(time);

function App() {
  const [state, setState] = useState(new Date().toLocaleTimeString());
  const [clicked, setClickState] = useState(false);

  function timeFun() {
    setClickState(true);
    setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000);
  }

  function TimeStart() {
    if (!clicked) {
      return (
        <>
          <h1>Shall we begin the clock</h1>
          <button onClick={timeFun}>Start Time</button>
        </>
      );
    } else {
      return (
        <>
          <h1>{state}</h1>
        </>
      );
    }
  }

  return (
    <div className="container">
      <TimeStart />
    </div>
  );
}

export default App;
