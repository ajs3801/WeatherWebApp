// redux file
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";

// logger
import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// export value
export const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);