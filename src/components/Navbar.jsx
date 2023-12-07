import React from 'react'
import profile from '../assets/profile.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">LIVE Chat</span>
        <div className="user">
            <img src="https://assets.telegraphindia.com/telegraph/2021/Jun/1623340223_loki_review.jpg" alt="" />
            <span>Loki</span>
            <button>logout</button>
        </div>
    </div>
    
  )
}

export default Navbar;