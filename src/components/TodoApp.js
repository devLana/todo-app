import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";

const TodoApp = () => {
  return (
    <div className="container">
      <div id="todo__app">
        <Navbar />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default TodoApp;
