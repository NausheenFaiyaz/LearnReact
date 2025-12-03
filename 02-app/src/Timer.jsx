import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    //Mounted
    console.log("Adding Interval")
    const timer = setInterval(() => setTime(time + 1), 1000);
    return function () {
    console.log("Clear Interval")
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div>
      <h1>StopWatch</h1>
      <p>Current time is {time}</p>
    </div>
  );
};

export default Timer;
