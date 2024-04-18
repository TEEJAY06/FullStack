import React from "react";

function DTerm(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}

export default DTerm;
