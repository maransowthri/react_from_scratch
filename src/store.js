import { createStore, combinedReducers } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const rootReducer = combinedReducers(reducers);

export const configureStore = () => createStore(rootReducer);
