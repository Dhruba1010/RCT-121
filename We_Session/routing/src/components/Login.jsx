import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

function Login() {
    const {state, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // if(state.isAuth) {
    //     return <Navigate to='/users' />
    // }


    const loginUsers = async () => {
        axios("https://reqres.in/api/login", {
            method: 'POST',
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
        .then(res => {
            alert('success');
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data.token
            });
            const redirect = searchParams.get('redirectTo');
            if(redirect) {
                navigate(redirect);
            }else {
                navigate('/users')
            }
            
        })
        .catch(err => {
            alert('fail')
        })
    }

  return (
    <div>
        <h2>Login</h2>
        <button onClick={loginUsers}>Login</button>
    </div>
  )
}

export default Login