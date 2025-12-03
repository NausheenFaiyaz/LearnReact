import React from "react";

export default function TodoItem(props) {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="todo-text">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
}
