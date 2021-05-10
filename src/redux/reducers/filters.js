import { createReducer } from "@reduxjs/toolkit";
import { setActiveFilter } from "../actions/filters";

const initialState = "filter/show_all";

export default createReducer(
  initialState,
  {
    [setActiveFilter]: (_, action) => action.payload,
  },
  () => initialState
);
