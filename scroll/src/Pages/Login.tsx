import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Components/AuthContext'

const Login = () => {
    const {login,isAuthenticated}=useContext(AuthContext);
    
  
    const callLogin=()=>{
        
        login();
        
    }
    console.log(login,isAuthenticated,"2nd");
  return (
    <div>Login
        <button onClick={callLogin}>login</button>
    </div>
  )
}

export default Login