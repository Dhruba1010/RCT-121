
export const actionType = {
    AutheticationSuccess: 'success',
    AutheticationFailure: 'failure'
};

export const authetication_success = () => {
    return {
        type: actionType.AutheticationSuccess
    }
}

export const authetication_failure = () => {
    return {
        type: actionType.AutheticationFailure
    }
}