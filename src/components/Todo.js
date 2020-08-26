import React from "react";
import Button from "./Button";

const Todo = props => {
  const toggleComplete = () => {
    props.toggleComplete(props.id);
  };

  const toggleImportant = () => {
    props.toggleImportant(props.id);
  };

  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };

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
      <p onClick={toggleComplete}>{props.content}</p>
      <span className="todo__btns">
        <Button
          className="important__btn"
          onClick={toggleImportant}
          title="Mark As Important"
          value="!"
        />
        <Button
          className="delete__todo__btn"
          onClick={deleteTodo}
          title="Delete Todo"
          value="&ndash;"
        />
      </span>
    </li>
  );
};

export default Todo;
