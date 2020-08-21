export const getId = arr => {
  const len = arr.length;
  const newId = len === 0 ? 1 : arr[len - 1].id + 1;
  return newId;
};

export const showTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
    default:
      return todos
        .sort((a, b) => b.important - a.important)
        .sort((a, b) => b.completed - a.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos
        .sort((a, b) => b.important - a.important)
        .filter(todo => !todo.completed);
    case "SHOW_IMPORTANT":
      return todos
        .sort((a, b) => b.important - a.important)
        .filter(todo => !todo.completed)
        .filter(todo => todo.important);
  }
};

export const navLinks = [
  {
    name: "All",
    filter: "SHOW_ALL",
  },
  {
    name: "Completed",
    filter: "SHOW_COMPLETED",
  },
  {
    name: "Active",
    filter: "SHOW_ACTIVE",
  },
  {
    name: "Important",
    filter: "SHOW_IMPORTANT",
  },
];
