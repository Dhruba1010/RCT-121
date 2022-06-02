
import { actionType } from './action';

export const reducer = (state, action) => {
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