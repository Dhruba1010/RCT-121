import { actionTypes } from "./action"


const initState = {
    isLoading: false,
    isError: false,
    data: [],
}

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.GET_RES_REQUEST :
            return {
                ...state,
                isLoading: true,
                isError:false
            }

        case actionTypes.GET_RES_SUCCESS : 
            return {
                ...state,
                isLoading:false,
                data: action.payload
            }

        case actionTypes.GET_RES_FAILURE : 
            return {
                ...state,
                isError: true
            }

        default :
            return state
    }
}