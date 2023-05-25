import { createAction } from "../../utils/reducer/reducer.utils";

import { TIME_ACTION_TYPES } from "./time.types";

export const setCurrentTime = (time) => 
  createAction(TIME_ACTION_TYPES.SET_CURRENT_TIME,time);