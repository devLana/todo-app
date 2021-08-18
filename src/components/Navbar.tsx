import React from "react";
import { useAppSelector } from "../hooks";
import Button from "./Button";

type NavbarProps = {
  toggleAddTodo: () => void;
  toggleDelete: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleAddTodo, toggleDelete }) => {
  const todos = useAppSelector(state => state.todos);

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
          disabled={todos.length === 0 ? true : false}
          value="&times;"
        />
      </div>
    </nav>
  );
};

export default Navbar;
