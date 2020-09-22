export const getId = arr => {
  if (arr.length === 0) return 1;

  const maxId = arr.reduce((acc, curr) => Math.max(acc, curr.id), 0);
  return maxId + 1;
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

export const filters = [
  {
    name: "All",
    type: "SHOW_ALL",
  },
  {
    name: "Completed",
    type: "SHOW_COMPLETED",
  },
  {
    name: "Active",
    type: "SHOW_ACTIVE",
  },
  {
    name: "Important",
    type: "SHOW_IMPORTANT",
  },
];

export const setStorage = state => {
  const todos = JSON.stringify(state);
  localStorage.setItem("todos", todos);
};

export const getStorage = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos);
};

export const removeStorage = () => {
  localStorage.removeItem("todos");
};
