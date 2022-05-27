import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData]  = useState([]);

  const toggleAuth = () => {
    setIsAuth(true);
    if(isAuth === false) {
      axios("https://reqres.in/api/login", {
        method: "GET",
      })
      .then(res => {
        setData(res.data.data);
        setIsAuth(!isAuth);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
    }else {
      setIsAuth(!isAuth);
    }
  }

  useEffect(()=> {
    toggleAuth();
  },[]);

  return (
    <AuthContext.Provider value={{isAuth, data, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider