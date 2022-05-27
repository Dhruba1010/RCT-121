import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';


function Navbar() {
    const {isAuth, toggleAuth} = useContext(AuthContext);
  return (
    <div style={{display:"flex", margin: 'auto', "justifyContent": 'center'}}>
        <div style={{display:"flex", width: "90%", margin: "1rem", "justifyContent": "space-between"}}>
            <div>
                <img height="75px" src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="Google" />
            </div>
            <div style={{display:"flex", "alignItems":"center", "marginRight": "1rem"}}>
                {isAuth ? (<button onClick={toggleAuth}>LOG OUT</button>) : (<button onClick={toggleAuth}>LOGIN</button>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar