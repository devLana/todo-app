import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTodo = createAction("todo/add", todo => ({
  payload: {
    id: nanoid(),
    content: todo,
    completed: false,
    important: false,
  },
}));

export const deleteTodo = createAction("todo/delete");

export const deleteAll = createAction("todo/deleteAll");

export const toggleImportant = createAction("todo/toggleImportant");

export const toggleComplete = createAction("todo/toggleComplete");

export const setTodos = createAction("todo/setTodos");
