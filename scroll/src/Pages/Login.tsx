import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthContext';

interface credType{
    username?:String,
    password?:String
}

const Login = () => {
    const {login,isAuthenticated}=useContext(AuthContext);
    const [credentials,setCredentials]=useState<credType>({});
    
    const callLogin=()=>{
        const {username,password}=credentials;
        if(username==="foo" && password==="bar"){
            login();
            alert("succesfully logged in")
        }else{
            alert("Invalid Credentials");
        }  
    }
    console.log(login,isAuthenticated,"2nd");

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        const {name,value}=e.target;
        setCredentials({...credentials,[name]:value})
    }   
  return (
    <div>
        <h2>User Login</h2>
        <input name="username" type="string" onChange={handleChange} placeholder="Enter your username"/>
        <br/>
        <input name="password"  type="string" onChange={handleChange} placeholder="Enter your password"/>
        <br/>
        <br/>
        <button onClick={callLogin}>Login</button>
    </div>
  )
}

export default Login