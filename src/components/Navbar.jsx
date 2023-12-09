import React from 'react'
import profile from '../assets/profile.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">LIVE Chat</span>
        <div className="user">
            <img src="https://assets.telegraphindia.com/telegraph/2021/Jun/1623340223_loki_review.jpg" alt="" />
            <span>Loki</span>
            <button onClick={() => signOut(auth)}>logout</button>
        </div>
    </div>
    
  )
}

export default Navbar;