import React from "react";
import Button from "./Button";

const Navbar = ({ toggleAddTodo }) => {
  return (
    <nav id="nav">
      <h1 className="logo">Todo App</h1>
      <div className="nav__btns">
        <Button
          className="add__todo"
          onClick={toggleAddTodo}
          title="Add New Todo"
        >
          +
        </Button>
        <Button className="delete__all" title="Delete All Todos">
          &times;
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
