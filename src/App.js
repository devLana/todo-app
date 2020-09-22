import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import todoReducer from "./redux/reducers";
import "./styles/index.scss";

const App = () => {
  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    todoReducer,
    enhancers(applyMiddleware(ReduxThunk))
  );

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
