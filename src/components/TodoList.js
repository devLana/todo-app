import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <main id="main">
      <div className="todos--container">
        <ul id="todos">
          {todos.map(todo => (
            <Todo key={todo} todo={todo} />
          ))}
        </ul>
      </div>
      {/* <div className="info">
        <p>You currently have no todos</p>
      </div> */}
    </main>
  );
};

export default TodoList;

const todos = ["Cooks", "Sleep", "write", "eat"];
