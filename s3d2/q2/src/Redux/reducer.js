
import { actionType } from './action';

export const reducer = (state, action) => {
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