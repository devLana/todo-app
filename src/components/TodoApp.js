import React, { useState } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
// import DeleteAll from "./DeleteAll";
// import DeleteTodo from "./DeleteTodo";

const TodoApp = () => {
  const [addTodo, setAddTodo] = useState(false);

  const toggleAddTodo = () => setAddTodo(!addTodo);

  return (
    <div className="container">
      <div id="todo__app">
        <Navbar toggleAddTodo={toggleAddTodo} />
        <TodoList />
        <Footer />
        {addTodo && <AddTodo toggleAddTodo={toggleAddTodo} status={addTodo} />}
        {/* <DeleteAll /> */}
        {/* <DeleteTodo /> */}
      </div>
    </div>
  );
};

export default TodoApp;
