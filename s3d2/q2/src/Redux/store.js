
import { legacy_createStore } from 'redux';
import { reducer } from './reducer';

const initState = {
    loading: false,
    error: false,
    todos : []
}

export const store = legacy_createStore(reducer, initState);