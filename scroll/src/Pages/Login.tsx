import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthContext';
import LoginStyles from "./Login.module.css";

interface credType{
    username?:String,
    password?:String
}

// For Login Purpose;

const Login = () => {
    const {login,isAuthenticated}=useContext(AuthContext);
    const [credentials,setCredentials]=useState<credType>({});
    
    const callLogin=()=>{
        const {username,password}=credentials;
    
        // Fake login credentials;
        if(username==="foo" && password==="bar"){
            login();
            alert("succesfully logged in")
        }else{
            alert("Invalid Credentials");
        }  
    }
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        const {name,value}=e.target;
        setCredentials({...credentials,[name]:value})
    } 

  return (
    <div className={LoginStyles.container}>
        <h2>User Login</h2>
        <input name="username"  type="string" onChange={handleChange} placeholder="Enter your username (foo)"/>
        <br/><br/>
        <input name="password"  type="password" onChange={handleChange} placeholder="Enter your password (bar)"/>
        <br/><br/><br/>
        <button onClick={callLogin}>Login</button>
    </div>
  )
}

export default Login