import React from "react";
import Button from "./Button";

const Todo = ({ todo }) => {
  return (
    <li className="todo">
      <p>{todo}</p>
      <span className="ctrl__btns">
        <Button className="important">!</Button>
        <Button className="delete__todo">-</Button>
      </span>
    </li>
  );
};

export default Todo;
