import { actionType } from "./action";

const initState = {
    authSuccess : false,
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.AutheticationSuccess :
            return {
                ...state,
                authSuccess : true,
            }

        case actionType.AutheticationFailure :
            return {
                ...state,
                authSuccess : false,
            }

        default : 
            return state
    }
}