import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

const fruits = ["a", "b", "c", "d"];
const veggies = ["e", "f", "g", "h", ...fruits];

console.log(veggies);

const user = {
  id: "101",
  name: "teejay",
};

const userDetails = {
  ...user,
  email: "john@",
  school: "egs",
};

console.log(userDetails);
