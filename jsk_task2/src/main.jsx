import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

var firstName = "Thejas";
var secondName = "Jayasingh";

const customStyle = {
  color: "red",
  fontSize: "20px",
};

customStyle.color = "blue";

var dateToday = new Date().getFullYear();
console.log(dateToday);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>
      Hello {firstName} {secondName}
    </h1>
    <h2 style={customStyle}>
      This is your captain{firstName + " " + secondName} speaking
    </h2>
    <p>Your required number is {Math.floor(Math.random() * 9) + 1}</p>
    <p>Created by {firstName + " " + secondName}</p>
    <p>Copyright {dateToday}</p>

    <div>
      <img
        className="flight"
        src="https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202308/blob110823105239.png"
        alt="air india"
      />
      <img
        className="flight"
        src="https://content.presspage.com/uploads/2431/30d203c6-d2a7-41ab-9889-918ee104fd68/1920_pr-5-3.jpg?10000"
        alt="emirates"
      />
      <img
        className="flight"
        src="https://img.etimg.com/thumb/msid-53415495,width-640,height-480,imgsize-72321,resizemode-4/etihad-airways-a380-sheer-luxury-on-air.jpg"
        alt="etihad"
      />
    </div>
  </div>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
