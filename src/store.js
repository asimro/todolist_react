import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todoRedux/todoReducer";

const rootReducer = combineReducers({
    todoReducer
})

export const store = createStore(rootReducer);