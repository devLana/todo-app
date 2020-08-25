import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const Navbar = ({ toggleAddTodo, toggleDelete }) => {
  const todos = useSelector(state => state.todos);
  return (
    <nav id="nav">
      <h1 className="logo">Todo App</h1>
      <div className="nav__btns">
        <Button
          className="add__todo__btn"
          onClick={toggleAddTodo}
          title="Add New Todo"
          value="+"
        />
        <Button
          className="delete__all__btn"
          onClick={toggleDelete}
          title="Delete All Todos"
          disable={todos.length <= 0 && "disabled"}
          value="&times;"
        />
      </div>
    </nav>
  );
};

export default Navbar;
