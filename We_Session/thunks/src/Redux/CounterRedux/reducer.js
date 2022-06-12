
import { actionType } from './action';

const initState = {
    count: 0
}

export const counterReducer = (state=initState, action) => {
    switch (action.type) {
        case actionType.INCREMENT_COUNTER :
            return {
                ...state,
                count : state.count+action.payload
            }
        
        case actionType.DECREMENT_COUNTER :
            return {
                ...state,
                count : state.count-action.payload
            }
        default:
            return state;
    }
}