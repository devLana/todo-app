import React from "react";
import { deleteTodo, toggleImportant, toggleComplete } from "../redux/actions";
import Button from "./Button";

const Todo = props => {
  const { todosAction, completed, content, id, important } = props;

  const handleComplete = () => {
    todosAction(id, toggleComplete);
  };

  const handleImportant = () => {
    todosAction(id, toggleImportant);
  };

  const handleDeleteTodo = () => {
    todosAction(id, deleteTodo);
  };

  return (
    <li
      className={
        completed ? "todo complete" : important ? "todo important" : "todo"
      }
    >
      <p onClick={handleComplete}>{content}</p>
      <span className="todo__btns">
        <Button
          className="important__btn"
          onClick={handleImportant}
          title="Mark As Important"
          value="!"
        />
        <Button
          className="delete__todo__btn"
          onClick={handleDeleteTodo}
          title="Delete Todo"
          value="&ndash;"
        />
      </span>
    </li>
  );
};

export default Todo;
