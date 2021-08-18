import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleImportant,
  toggleComplete,
} from "../redux/actions/todos";
import Button from "./Button";

type TodoProps = {
  completed: boolean;
  content: string;
  id: string;
  important: boolean;
};

const Todo: React.FC<TodoProps> = props => {
  const dispatch = useDispatch();

  // const { todosAction, completed, content, id, important } = props;
  const { completed, content, id, important } = props;

  const handleComplete = () => {
    // todosAction(id, toggleComplete);
    dispatch(toggleComplete(id));
  };

  const handleImportant = () => {
    // todosAction(id, toggleImportant);
    dispatch(toggleImportant(id));
  };

  const handleDeleteTodo = () => {
    // todosAction(id, deleteTodo);
    dispatch(deleteTodo(id));
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
