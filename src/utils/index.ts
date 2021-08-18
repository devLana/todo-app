import { TodoType } from "../dataTypes";

// export const getId = arr => {
//   if (arr.length === 0) return 1;
//   const maxId = arr.reduce((acc, curr) => Math.max(acc, curr.id), 0);
//   return maxId + 1;
// };

type GetStorage = TodoType[] | null;

type FilterTypes = {
  name: string;
  type: string;
};

const sortFunc = (a: boolean, b: boolean) => {
  type mapperType = {
    [index: string]: number;
    true: number;
    false: number;
  };

  const mapper: mapperType = { true: 1, false: 0 };

  const newA = mapper[String(a)];
  const newB = mapper[String(b)];

  return newA - newB;
};

export const showTodos = (todos: TodoType[], filter: string) => {
  switch (filter) {
    default:
    case "filter/show_all":
      return [...todos]
        .sort((a, b) => sortFunc(b.important, a.important))
        .sort((a, b) => sortFunc(b.completed, a.completed));

    case "filter/completed":
      return todos.filter(todo => todo.completed);

    case "filter/active":
      return [...todos]
        .sort((a, b) => sortFunc(b.important, a.important))
        .filter(todo => !todo.completed);

    case "filter/important":
      return [...todos]
        .sort((a, b) => sortFunc(b.important, a.important))
        .filter(todo => !todo.completed)
        .filter(todo => todo.important);
  }
};

export const filters: FilterTypes[] = [
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

export const setStorage = (state: TodoType[]) => {
  const todos = JSON.stringify(state);
  localStorage.setItem("todos", todos);
};

export const getStorage = (): GetStorage => {
  const todos = localStorage.getItem("todos");

  if (todos) return JSON.parse(todos);
  return null;
};

export const removeStorage = () => {
  localStorage.removeItem("todos");
};
