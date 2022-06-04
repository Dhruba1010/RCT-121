import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

export default function LoginDetails() {
  const {isAuth, data} = useContext(AuthContext);

  return (
    <div>
      {isAuth ? (
        <div>
          <p>Status : Login</p>
          <h3>{data.token}</h3>
        </div>
      ) : null}
    </div>
  )
}
