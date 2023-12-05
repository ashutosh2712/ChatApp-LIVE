import React from 'react'
import Add from '../assets/addAvatar.png'
const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">LIVE Chat</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Login</button>
            </form>
            <p>Dont have an account? Sign in</p>
        </div>
        </div>
  )
}

export default Register