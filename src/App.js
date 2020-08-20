import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import todoReducer from "./redux/reducers";
import "./styles/index.scss";

const App = () => {
  const store = createStore(todoReducer);

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
