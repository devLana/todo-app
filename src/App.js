import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import todoReducer from "./redux/reducers";
import "./styles/index.scss";

const App = () => {
  const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
