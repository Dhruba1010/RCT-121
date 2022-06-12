
import { actionType } from './action';

const initState = {
    loading: false,
    error: false,
    todos : []
}

export const todoReducer = (state=initState, action) => {
    switch(action.type) {
        case actionType.GET_TODOS_REQUEST : 
            return {
                ...state,
                loading: true,
                error: false,
            }

        case actionType.GET_TODOS_SUCCESS : 
            return {
                ...state,
                loading: false,
                error: false,
                todos : action.payload
            }
        
        case actionType.GET_TODOS_FAILURE : 
            return {
                ...state,
                loading: false,
                error: true,
            }
        
        case actionType.ADD_TODOS_REQUEST : 
            return {
                ...state,
                loading: true,
                error: false,
            }

        case actionType.ADD_TODOS_SUCCESS : 
            return {
                ...state,
                loading: false,
                error: false,
            }
        
        case actionType.ADD_TODOS_FAILURE : 
            return {
                ...state,
                loading: false,
                error: true,
            }
         
        default :
            return state;
    }
}