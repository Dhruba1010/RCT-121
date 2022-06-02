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

export const getTodos = (dispatch) => {
    dispatch(get_todos_request());
    return axios("http://localhost:8080/todos", {
        method : "GET"
    })
    .then(res => {
        dispatch(get_todos_success(res.data))
    })
    .catch(err => {
        dispatch(get_todos_failure());
    })
}



export const add_todos_request = () => {
    return {
        type : actionType.ADD_TODOS_REQUEST,
    }
};

export const add_todos_success = (data) => {
    return {
        type : actionType.ADD_TODOS_SUCCESS,
        payload : data
    }
}

export const add_todos_failure = () => {
    return {
        type : actionType.ADD_TODOS_FAILURE,
    }
}

export const addTodos = ({title, dispatch}) => {
    dispatch(add_todos_request());
    return axios("http://localhost:8080/todos", {
        method : "POST",
        data : {
            title
        }
    })
    .then(res => {
        dispatch(add_todos_success())
    })
    .catch(err => {
        dispatch(add_todos_failure());
    })
}