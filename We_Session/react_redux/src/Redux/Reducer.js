const reducer = (state, action) => {
    switch(action.type) {
        case 'Increament' : 
            return {
                ...state,
                count : state.count+1
            }
        case 'Decreament' : 
        return {
            ...state,
            count : state.count-1
        }
        default :
            return state;
    }
}