import React from "react";
// import { connect } from "react-redux";
import { useAppSelector } from "../hooks";
import { showTodos } from "../utils";
// import { todosAction } from "../redux/actions";
import Todo from "./Todo";

const styles: React.CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  marginTop: "40px",
};

// const TodoList = props => {
//   const { todos, todosAction } = props;
const TodoList: React.FC<{}> = () => {
  const todos = useAppSelector(state =>
    showTodos(state.todos, state.activeFilter)
  );

  return (
    <main id="main">
      <div className="todos--container">
        {todos.length === 0 ? (
          <p style={styles}>No todos available</p>
        ) : (
          <ul id="todos">
            {todos.map(todo => (
              // <Todo {...todo} key={todo.id} todosAction={todosAction} />
              <Todo {...todo} key={todo.id} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

// const mapStateToProps = state => {
//   const { todos, activeFilter } = state;
//   return { todos: showTodos(todos, activeFilter) };
// };

// export default connect(mapStateToProps, { todosAction })(TodoList);

export default TodoList;
