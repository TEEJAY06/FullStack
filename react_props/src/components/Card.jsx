import React from "react";
import CircleAvatar from "./CircleAvatar";
import Detail from "./Detail";

function PhoneCard(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <p className="name">{props.cdId}</p>
          <h2 className="name">{props.name}</h2>
          <CircleAvatar imgURL={props.img} />
        </div>
        <div className="bottom">
          <Detail info={props.tel} />
          <Detail info={props.mail} />
        </div>
      </div>
    </>
  );
}

export default PhoneCard;
