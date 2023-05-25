import { combineReducers } from "redux";

import { timeReducer } from "./time/time.reducer";

export const rootReducer = combineReducers({
  time: timeReducer,
});