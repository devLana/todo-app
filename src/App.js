import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import ReduxThunk from "redux-thunk";
import todos from "./redux/reducers/todos";
import activeFilter from "./redux/reducers/filters";
import TodoApp from "./components/TodoApp";
import "./styles/index.scss";

const App = () => {
  // const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = createStore(
  //   todoReducer,
  //   enhancers(applyMiddleware(ReduxThunk))
  // );

  const reducer = {
    todos,
    activeFilter,
  };

  const store = configureStore({
    reducer,
  });

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
