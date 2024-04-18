import { useState } from "react";
import "../App.css";
import DList from "./DList";
import emojipedia from "../Emojipedia";

function App() {
  var nums = [3, 56, 2, 4800, 5];
  // MAP- creates a new array by doing something with each item in an array

  // function double(x) {
  //   return x * 2;
  // }

  // const newNums = nums.map(function (x) {
  //   return x * 2;
  // });

  // const newNums = [];
  // nums.forEach(function (x) {
  //   newNums.push(x - 1);
  // });

  // console.log(newNums);

  // FILTER- creates a new array by keeping the items which return true

  // const newNums = [];
  // nums.forEach(function (x) {
  //   if (x > 10) {
  //     newNums.push(x);
  //   }
  // });
  // console.log(newNums);

  // const newNums = nums.filter(function (x) {
  //   return x < 10;
  // });

  // console.log(newNums);

  // Reduce- Accumulate a value by doing something to each item in an array

  // var acc = 0;

  // nums.forEach(function (x) {
  //   acc = acc + x;
  // });

  // const newNum = nums.reduce(function (x, acc) {
  //   return acc + x;
  // });
  // console.log(newNum);

  // FIND- find the first item that matches from an array

  // const newNum = nums.find(function (x) {
  //   return x > 10;
  // });
  // console.log(newNum);

  // FINDINDEX- find the index of the first item that matches
  // const newNum = nums.findIndex(function (x) {
  //   return x > 100;
  // });
  // console.log(newNum);

  const res = emojipedia.map(function (x) {
    return x.meaning.substring(0, 100);
  });
  console.log(res);

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <DList />
    </div>
  );
}

export default App;

{
  /* <dl className="dictionary">
<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      💪
    </span>
    <span>Tense Biceps</span>
  </dt>
  <dd>
    “You can do that!” or “I feel strong!” Arm with tense biceps. Also
    used in connection with doing sports, e.g. at the gym.
  </dd>
</div>
<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      🙏
    </span>
    <span>Person With Folded Hands</span>
  </dt>
  <dd>
    Two hands pressed together. Is currently very introverted, saying a
    prayer, or hoping for enlightenment. Is also used as a “high five”
    or to say thank you.
  </dd>
</div>
<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      🤣
    </span>
    <span>Rolling On The Floor, Laughing</span>
  </dt>
  <dd>
    This is funny! A smiley face, rolling on the floor, laughing. The
    face is laughing boundlessly. The emoji version of “rofl“. Stands
    for „rolling on the floor, laughing“.
  </dd>
</div>
</dl> */
}
