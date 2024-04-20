import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

var count = 0;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

// function pressed() {
//   count++;
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={pressed}>+</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={pressed}>+</button>
//   </div>
// );
