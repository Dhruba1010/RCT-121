import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authetication_failure, authetication_success } from '../Redux/Authentication/action';

function Login() {
    const dispatch = useDispatch();
    const isAuth = useSelector(store => store.auth);

  return (
    <div>
        <h2>Click on the Login button to Login</h2>
        {isAuth ? (<button onClick={() => dispatch(authetication_failure())}>Logout</button>) : (<button onClick={() => dispatch(authetication_success())}>Login</button>)}
    </div>
  )
}

export default Login