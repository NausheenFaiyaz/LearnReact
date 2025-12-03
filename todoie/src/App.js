import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import CounterComponent from "./components/CounterComponent"
import "./style.css"
const App = () => {
  return (
    <>
    <div className="counter-container">
      <Header heading="Counter"/>
      <CounterComponent/>
    </div>
    <div className="todo-container">
      <Header heading="Todo"/>
      <TodoItem completed={true} text="Eat" />
      <TodoItem text="Code"/>
      <TodoItem text="Study"/>
      <TodoItem text="Play"/>
      <TodoItem text="Sleep"/>
      <Button/>
    </div>
    </>
  )
};

export default App;
