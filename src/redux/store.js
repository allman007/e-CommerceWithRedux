//third

import { persistStore } from "redux-persist";

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");

const middlewares = [logger];

//Before React-Persist
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
