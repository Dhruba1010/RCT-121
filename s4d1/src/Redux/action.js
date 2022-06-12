import axios from "axios";


export const actionTypes = {
    GET_RES_REQUEST: 'GET_RES_REQUEST',
    GET_RES_SUCCESS: 'GET_RES_SUCCESS',
    GET_RES_FAILURE: 'GET_RES_FAILURE'
}

export const get_res_request = () => {
    return {
        type : actionTypes.GET_RES_REQUEST
    }
}

export const get_res_success = (data) => {
    return {
        type : actionTypes.GET_RES_SUCCESS,
        payload: data
    }
}

export const get_res_failure = () => {
    return {
        type : actionTypes.GET_RES_FAILURE
    }
}



export const getData = ({page,sort,filterRating}) => (dispatch) => {
    dispatch(get_res_request());
    return axios('http://localhost:8080/retaurants', {
        method: 'GET',
        params: {
            _page:page,
            _limit:5,
            _sort:'cost',
            _order: sort,
            rating_gte:filterRating
        }
    })
    .then(res => {
        dispatch(get_res_success(res.data))
    })
    .catch(err => {
        dispatch(get_res_failure());
        console.log(err);
    })
}