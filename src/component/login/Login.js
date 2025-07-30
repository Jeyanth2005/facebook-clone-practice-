import React from 'react'
import { Button } from '@mui/material'
import './login.css'
import { signInWithPopup } from 'firebase/auth'
import {auth,provider} from '../../firebase'
const Login = ({setUser}) => {
  const signIn=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      setUser(result.user);
    }).catch((err)=>{
      console.log(err);
    });
  }
  return (
    <div className='login'>
        <h1>Login</h1>
        <p>Login with Google</p>
        <button>Login</button>
        <Button onClick={signIn}>Sign In</Button>
    </div>
    
  )
}

export default Login
