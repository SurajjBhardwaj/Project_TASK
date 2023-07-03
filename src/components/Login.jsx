import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    
    <div className='login'>

    <input type="text" placeholder='Username/Email' />
    <input type="password" placeholder='Password' />
    
    <input className='submitLogin' type="submit" value="Login" />
    <h1 className='mx-36 mt-2 font-medium'>OR</h1>
   <Link to="/register"> <input className='submitRegister' type="submit" value="Register" />
   </Link>
    
    </div>
  )
}

export default Login