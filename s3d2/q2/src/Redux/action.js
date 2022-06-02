import axios from "axios";

export const actionType = {
    GET_TODOS_REQUEST : 'GET_TODOS_REQUEST',
    GET_TODOS_SUCCESS : 'GET_TODOS_SUCCESS',
    GET_TODOS_FAILURE : 'GET_TODOS_FAILURE',
    ADD_TODOS_REQUEST : 'ADD_TODOS_REQUEST',
    ADD_TODOS_SUCCESS : 'ADD_TODOS_SUCCESS',
    ADD_TODOS_FAILURE : 'ADD_TODOS_FAILURE'
}

export const get_todos_request = () => {
    return {
        type : actionType.GET_TODOS_REQUEST,
    }
};

export const get_todos_success = (data) => {
    return {
        type : actionType.GET_TODOS_SUCCESS,
        payload : data
    }
}

export const get_todos_failure = () => {
    return {
        type : actionType.GET_TODOS_FAILURE,
    }
}

export const getTodods = (dispatch) => {
    dispatch(get_todos_request());
    axios("http://localhost:8080/todos", {
        method : "GET"
    })
    .then(res => {
        dispatch(get_todos_success(res.data))
    })
    .catch(err => {
        dispatch(get_todos_failure());
    })
}

// export const addTodods = (dispatch) => {
//     dispatch(add_todos_request());
//     axios("http://localhost:8080/todos", {
//         method : "POST",
//         body : {

//         }
//     })
//     .then(res => {
//         dispatch(add_todos_success(res.data))
//     })
//     .catch(err => {
//         dispatch(add_todos_failure());
//     })
// }