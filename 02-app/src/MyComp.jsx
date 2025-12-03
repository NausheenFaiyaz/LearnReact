import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("My Component is mounting...."); // this got executed when my component got mounted

    return function () {
      console.log("Unmounting....."); // this will execute when my component got unmounted
    };
  }, []); // if dependency array is empty then it only runs when component gets mounted

  useEffect(() => {
    console.log("Count got updated", count);

    return function () {
      console.log("Returning count", count);
    };
    //when my component got rerender/updated then first it will return the function before updation then execute updation
  }, [count]); // if we give it dependency then it runs always when the state varible is updated

  return (
    <>
      <p>Count is - {count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
};
export default MyComponent;
