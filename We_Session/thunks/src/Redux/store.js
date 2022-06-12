import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./CounterRedux/reducer";
import { todoReducer } from "./TodoRedux/reducer";

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));