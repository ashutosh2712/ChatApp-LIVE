import React from 'react'
import Add from '../assets/addAvatar.png'
const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">LIVE Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='user Name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" id='file'/>
                <label htmlFor="file"><img src={Add} alt="Add User" />
                <span>Add an Avatar</span></label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
        </div>
  )
}

export default Register