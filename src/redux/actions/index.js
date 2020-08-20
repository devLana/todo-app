export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = todoId => ({
  type: "DELETE_TODO",
  payload: todoId,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});

export const toggleImportant = todoId => ({
  type: "TOGGLE_IMPORTANT",
  payload: todoId,
});

export const toggleComplete = todoId => ({
  type: "TOGGLE_COMPLETE",
  payload: todoId,
});

export const setFilter = filter => ({
  type: "SET_ACTIVE_FILTER",
  payload: filter,
});
