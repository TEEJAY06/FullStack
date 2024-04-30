import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onChange={props.onInput}>
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          //   defaultValue={item.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
          //   defaultValue={item.content}
        />
        <button onClick={props.onSub}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
