
import { combineReducers, legacy_createStore } from 'redux';
import { authReducer } from './Authentication/reducer';
import { todoReducer } from './Todos/reducer';

const rootReducer = combineReducers({
    auth : authReducer,
    todo : todoReducer
})

export const store = legacy_createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());