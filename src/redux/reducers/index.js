import { combineReducers } from 'redux'
import { getId } from "../../utils";

const activeFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_ACTIVE_FILTER":
      return action.payload;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: getId(state),
          content: payload,
          completed: false,
          important: true,
        },
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== payload);
    case "DELETE_ALL":
      return [];
    case "TOGGLE_IMPORTANT":
      return state.map(todo => {
        if (todo.id === payload) {
          return {
            ...todo,
            important: !todo.important,
          };
        }
        return todo;
      });
    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        if (todo.id === payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default combineReducers({
  activeFilter,
  todos,
})
