import React from "react";
import Button from "./Button";

const Todo = props => {
  return (
    <li
      className={
        props.completed
          ? "todo complete"
          : props.important
          ? "todo important "
          : "todo"
      }
    >
      <p onClick={() => props.toggleComplete(props.id)}>{props.content}</p>
      <span className="todo__btns">
        <Button
          className="important__btn"
          onClick={() => props.toggleImportant(props.id)}
          title="Mark As Important"
          value="!"
        />
        <Button
          className="delete__todo__btn"
          onClick={() => props.deleteTodo(props.id)}
          title="Delete Todo"
          value="&ndash;"
        />
      </span>
    </li>
  );
};

export default Todo;
