import { createAction, nanoid } from "@reduxjs/toolkit";
import type { TodoType } from "../../dataTypes";

type Payload = {
  payload: TodoType;
};

export const addTodo = createAction(
  "todo/add",
  (todo: string): Payload => ({
    payload: {
      id: nanoid(),
      content: todo,
      completed: false,
      important: false,
    },
  })
);

export const deleteTodo = createAction<string>("todo/delete");

export const deleteAll = createAction("todo/deleteAll");

export const toggleImportant = createAction<string>("todo/toggleImportant");

export const toggleComplete = createAction<string>("todo/toggleComplete");

export const setTodos = createAction<TodoType[]>("todo/setTodos");
