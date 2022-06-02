
export const actionType = {
    INCREMENT_COUNTER : 'INCREMENT_COUNTER',
    DECREMENT_COUNTER : 'DECREMENT_COUNTER'
}

export const increamentCount = (data) => {
    return {
        type: actionType.INCREMENT_COUNTER,
        payload: data
    }
}

export const decrementCount = (data) => {
    return {
        type: actionType.DECREMENT_COUNTER,
        payload: data
    }
}