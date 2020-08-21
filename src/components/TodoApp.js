import React, { useState } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import DeleteAll from "./DeleteAll";

const TodoApp = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [deleteAll, setDelete] = useState(false);

  const toggleAddTodo = () => setAddTodo(!addTodo);
  const toggleDelete = () => setDelete(!deleteAll);

  return (
    <div className="container">
      <div id="todo__app">
        <Navbar toggleAddTodo={toggleAddTodo} toggleDelete={toggleDelete} />
        <TodoList />
        <Footer />
        {addTodo && <AddTodo toggleAddTodo={toggleAddTodo} />}
        {deleteAll && <DeleteAll toggleDelete={toggleDelete} />}
      </div>
    </div>
  );
};

export default TodoApp;
