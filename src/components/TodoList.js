import React from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleImportant, toggleComplete } from "../redux/actions";
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
          <p style={styles}>You have no todos</p>
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

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  deleteTodo,
  toggleImportant,
  toggleComplete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
