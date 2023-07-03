import React from 'react'

const Register = () => {
  return (
    <div className='register'>
    
    <input type="text" placeholder='Name' name='name' />
    <input type="email" placeholder='Email' name="email"/>
    <input type="password" placeholder='Password' name="password"/>
    
    <input className='registerform' type="submit" value="Register" />
    <h1 className='mx-36 mt-2 font-medium'>OR</h1>
    <input className='loginform' type="submit" value="Login" />
    

    </div>
  )
}

export default Register