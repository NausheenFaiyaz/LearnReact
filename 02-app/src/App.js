import React, { useEffect,useState } from "react";
import "./App.css";
import MyComponent from "./MyComp";

function App() {
  const [isVisible,setVisible]=useState(true)
useEffect(()=>{
  console.log('App component is Mounting....');
  
},[])

  return <div className="App">
    {isVisible? <MyComponent/>:<></>}
    <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
  </div>;
}

export default App;
