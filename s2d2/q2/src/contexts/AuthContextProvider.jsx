import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData]  = useState([]);

  const getData = () => {
    axios("https://reqres.in/api/login", {
      method: "POST",
      data: {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
    })
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(()=> {
    if(isAuth){
      getData();
    }
  },[]);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  }

  return (
    <AuthContext.Provider value={{isAuth, toggleAuth, data, getData}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider