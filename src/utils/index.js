export const filters = {
  all: "SHOW_ALL",
  completed: "SHOW_COMPLETED",
  active: "SHOW_ACTIVE",
  important: "SHOW_IMPORTANT",
};

export const getId = arr => {
  const len = arr.length;
  const newId = len === 0 ? 1 : arr[len - 1].id + 1;
  return newId;
};
