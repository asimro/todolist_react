import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { todoReducer } from "./todoRedux/todoReducer";

// const rootReducer = combineReducers({
//     todo: todoReducer,
// })




export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});