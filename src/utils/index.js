export const getId = arr => {
  const idArr = arr.map(item => item.id);
  const maxId = Math.max(...idArr);

  return arr.length === 0 ? 1 : maxId + 1;
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
