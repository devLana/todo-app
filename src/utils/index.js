export const getId = arr => {
  const len = arr.length;
  const newId = len === 0 ? 1 : arr[len - 1].id + 1;
  return newId;
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
