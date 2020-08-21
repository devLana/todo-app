import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleImportant, toggleComplete } from "../redux/actions";
import { showTodos } from "../utils";
import Todo from "./Todo";

const styles = {
  fontSize: "2rem",
  textAlign: "center",
  marginTop: "40px",
};

const TodoList = props => {
  const { todos, deleteTodo, toggleImportant, toggleComplete } = props;

  return (
    <main id="main">
      <div className="todos--container">
        {todos.length === 0 ? (
          <p style={styles}>No todos available</p>
        ) : (
          <ul id="todos">
            {todos.map(todo => (
              <Todo
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                toggleImportant={toggleImportant}
                toggleComplete={toggleComplete}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  const { todos, activeFilter } = state;
  return { todos: showTodos(todos, activeFilter) };
};

const mapDispatchToProps = {
  deleteTodo,
  toggleImportant,
  toggleComplete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
