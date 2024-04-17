import React from "react";
import "./Greeting.css";
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
    <h1 className="heading" style={greetCol}>
      {Greet}
    </h1>
  );
}

export default Greeting;
