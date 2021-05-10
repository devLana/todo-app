import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleImportant, toggleComplete } from "../redux/actions/todos";
import { setStorage } from "../utils";
import Button from "./Button";

const Todo = props => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // const { todosAction, completed, content, id, important } = props;
  const { completed, content, id, important } = props;

  const handleComplete = () => {
    // todosAction(id, toggleComplete);
    dispatch(toggleComplete(id));
    setStorage(todos)
  };

  const handleImportant = () => {
    // todosAction(id, toggleImportant);
    dispatch(toggleImportant(id));
    setStorage(todos)
  };

  const handleDeleteTodo = () => {
    // todosAction(id, deleteTodo);
    dispatch(deleteTodo(id));
    setStorage(todos)
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
