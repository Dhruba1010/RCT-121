import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

export default function LoginDetails() {
  const {data} = useContext(AuthContext);

  return (
    <div>
      {data.map(u => <div key={u.id}>
        <p>Statue : Login</p>
        <p>Token : {u.token}</p>
      </div>)}
      
    </div>
  )
}
