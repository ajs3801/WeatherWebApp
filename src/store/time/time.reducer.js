import { TIME_ACTION_TYPES } from "./time.types.js";

const INITIAL_STATE = {
  currentTime: 30,
};

export const timeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case TIME_ACTION_TYPES.SET_CURRENT_TIME:
      return { 
        ...state, currentTime: payload 
      };

    default:
      return state;
  }
}