import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { GithubCard } from './GithubCard';


const initState = {
    loading: true,
    error: false,
    data: null
}

const actionType = {
    'fetch': 'fetch',
    'success': 'success',
    'failure': 'failure'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.fetch : {
            return (
                {
                    ...state,
                    loading : true,
                    error : false,
                    data : null
                }
            )
        }
        case actionType.success : {
            return (
                {
                    ...state,
                    loading : false,
                    error : false,
                    data : action.payload
                }
            )
        }
        case actionType.failure : {
            return (
                {
                    ...state,
                    loading : false,
                    error : true,
                }
            )
        }
        default : 
        return state
    }
}


function Github() {
    const [{loading, error, data}, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () => {
        dispatch({
            type: actionType.fetch
        })
        axios("https://api.github.com/search/users", {
            method: "GET",
            params : {
                q: 'masai'
            }
        })
        .then(res => {
            dispatch({
                type: actionType.success,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: actionType.failure,
            })
        })
    }

  return (
    <div>
        {loading && <div>...loading</div>}
        {error && <div>Something went wrong!</div>}
        {data?.items.map(u => (
            <GithubCard key={u.id} {...u} />
        ))}
    </div>
  )
}

export default Github