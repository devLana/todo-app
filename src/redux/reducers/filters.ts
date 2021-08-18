import { createReducer } from "@reduxjs/toolkit";
import { setActiveFilter } from "../actions/filters";

const initialState = "filter/show_all";

export default createReducer(initialState, builder => {
  builder.addCase(setActiveFilter, (_, action) => action.payload);
});
