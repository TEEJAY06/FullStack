import React, { useState } from "react";

// function TodoItem(props) {
//   const [lT, setLT] = useState(false);

//   function clicked() {
//     setLT((prev) => {
//       return !prev;
//     });
//   }

//   return (
//     <li
//       onClick={clicked}
//       style={
//         lT ? { textDecoration: "line-through" } : { textDecoration: "none" }
//       }
//     >
//       {props.text}
//     </li>
//   );
// }

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.onClicked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
