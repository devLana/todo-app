export const getId = arr => {
  if (arr.length === 0) return 1;

  const maxId = arr.reduce((acc, curr) => Math.max(acc, curr.id), 0);
  return maxId + 1;
};

export const showTodos = (todos, filter) => {
  switch (filter) {
    default:
    case "filter/show_all":
      return [...todos]
        .sort((a, b) => b.important - a.important)
        .sort((a, b) => b.completed - a.completed);

    case "filter/completed":
      return todos.filter(todo => todo.completed);

    case "filter/active":
      return [...todos]
        .sort((a, b) => b.important - a.important)
        .filter(todo => !todo.completed);

    case "filter/important":
      return [...todos]
        .sort((a, b) => b.important - a.important)
        .filter(todo => !todo.completed)
        .filter(todo => todo.important);
  }
};

export const filters = [
  {
    name: "All",
    type: "filter/show_all",
  },
  {
    name: "Completed",
    type: "filter/completed",
  },
  {
    name: "Active",
    type: "filter/active",
  },
  {
    name: "Important",
    type: "filter/important",
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
