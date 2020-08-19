import React from "react";
import Button from "./Button";

const Todo = ({ todo }) => {
  return (
    <li className="todo">
      <p>{todo}</p>
      <span className="todo__btns">
        <Button className="important" title="Mark As Important">!</Button>
        <Button className="delete__todo" title="Delete Todo">-</Button>
      </span>
    </li>
  );
};

export default Todo;
