import React, { useContext, useState } from 'react'
import Usercontextprovider from '../context/Usercontextprovider'
// import { userContext } from 'react'
import Usercontext from '../context/Usercontext.js'
useContext

function Login() {
    const {setUser} = useContext(Usercontext)
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')
    const handlesubmit =(e)=>{
        
        setUser({username,password})
    }

  return (
    <div>
      <input 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      type="text" placeholder='username'/>
      <input 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      type="text" placeholder='password'/>
      <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login
