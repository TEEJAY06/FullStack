import { useState } from "react";
import "../App.css";
import Login from "./Login";
import Form from "./RegForm";

var isLoggedIn = false;
var isRegistered = false;

function renderConditionally() {
  if (isLoggedIn == true) {
    return <h1>Hello</h1>;
  } else {
    return <Login></Login>;
  }
}

function App() {
  return (
    <div className="container">
      <Form isRegistered={isRegistered}></Form>
    </div>
  );
}

export default App;
