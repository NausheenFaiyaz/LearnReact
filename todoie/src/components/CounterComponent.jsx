import React, { useState } from "react";

const CounterComponent = () => {
  // A hook always start with use
  //useState ek array return krta hai of size 2 jiske [0] index pr actual value hoti hai state ki
  // and [1] index pe ek function hoti h jo iske value ko change krega aap directly is value ko change nhi kr sakte
  const [count, setCount] = useState(0); // this is the initial value of state
  return (
    <div>
      <p>Count Component - {count}</p>
      <p>Number is {count % 2 === 0 ? "Even" : "Odd"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
