import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../actions/todo";

const initialState = [];

export default createReducer(initialState, builder => {
  builder
    .addCase(actions.addTodo, (state, action) => [...state, action.payload])

    .addCase(actions.toggleImportant, (state, action) => {
      const todo = state.find(item => item.id === action.payload);

      if (todo) todo.important = !todo.important;
    })

    .addCase(actions.toggleComplete, (state, action) => {
      const todo = state.find(item => item.id === action.payload);

      if (todo) todo.completed = !todo.completed;
    })

    .addCase(actions.deleteAll, () => initialState)

    .addCase(actions.deleteTodo, (state, action) => {
      state.filter(todo => todo.id === action.payload);
    })

    .addCase(actions.setTodos, (_, action) => action.payload)

    .addDefaultCase(() => initialState);
});
