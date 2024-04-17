import React from "react";
import "./Greeting.css";
import * as pie from "./math";
import pi, { pi2, pi3, add, multiply, divide, subtract } from "./math";

console.log(pi);

let Greet;
var hrs = new Date().getHours();

var greetCol = {
  color: "",
};

if (hrs < 12) {
  Greet = "Good Morning";
  greetCol.color = "red";
} else if (hrs < 18) {
  Greet = "Good Afternoon";
  greetCol.color = "green";
} else if (hrs < 24) {
  Greet = "Good Evening";
  greetCol.color = "blue";
}
function Greeting() {
  return (
    <>
      <h1 className="heading" style={greetCol}>
        {Greet}
      </h1>
      <p>{pie.pi2()}</p>
      <ul>
        <li>{pie.add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{pie.subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </>
  );
}

export default Greeting;
