import React from "react";
import DTerm from "./DTerm";
import emojipedia from "../Emojipedia";

function CreateDTerm(emojicon) {
  return (
    <DTerm
      key={emojicon.id}
      emoji={emojicon.emoji}
      emojiName={emojicon.name}
      desc={emojicon.meaning}
    />
  );
}

function DList() {
  return (
    <dl className="dictionary">
      {emojipedia.map((emojicon) => (
        <DTerm
          key={emojicon.id}
          emoji={emojicon.emoji}
          emojiName={emojicon.name}
          desc={emojicon.meaning}
        />
      ))}
    </dl>
  );
}

export default DList;
