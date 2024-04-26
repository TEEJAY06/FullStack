import { useState } from "react";
import "../App.css";

function App() {
  const whiteBut = {
    backgroundColor: "white",
  };
  const blackBut = {
    backgroundColor: "black",
  };

  const [submitText, setText] = useState("Submit");
  const [butCol, setCol] = useState(whiteBut);

  const [formTxt, setInp] = useState("");
  const [form2Txt, setInp2] = useState("");

  const [fullName, setFullName] = useState({
    fname: "",
    sname: "",
  });

  function handleChange(event) {
    // const newVal = event.target.value;
    // const inpName = event.target.name;

    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setFullName((prevValue) => {
      if (name === "fname") {
        return { fname: value, sname: prevValue.sname };
      } else if (name === "sname") {
        return { fname: prevValue.fname, sname: value };
      }
    });
  }

  function pressed() {
    setText("Submitted");
  }

  function setBut() {
    if (JSON.stringify(butCol) === JSON.stringify(blackBut)) {
      console.log("out");
      setCol(whiteBut);
    } else {
      console.log("in");
      setCol(blackBut);
    }
  }

  // function handleChange1(event) {
  //   console.log(event.target.value);
  //   setInp(event.target.value);
  // }
  // function handleChange2(event) {
  //   console.log(event.target.value);
  //   setInp2(event.target.value);
  // }

  return (
    <div className="container">
      {/* <h1>Hello {submitText == "Submitted" ? formTxt : ""}</h1> */}
      <h1>
        Hello {fullName.fname} {fullName.sname}
      </h1>
      <input
        name="fname"
        onChange={handleChange}
        type="text"
        placeholder="FirstName"
        value={fullName.fname}
      />
      <input
        name="sname"
        onChange={handleChange}
        type="text"
        placeholder="SecondName"
        value={fullName.sname}
      />
      <button
        style={butCol}
        onClick={pressed}
        onMouseOver={setBut}
        onMouseOut={setBut}
      >
        {submitText}
      </button>
    </div>
  );
}

export default App;
