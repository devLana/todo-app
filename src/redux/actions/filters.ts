import { createAction } from "@reduxjs/toolkit";

export const setActiveFilter = createAction<string>("filter/setActiveFilter");
