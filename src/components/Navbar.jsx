import React, { useContext } from 'react'
import profile from '../assets/profile.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <span className="logo">LIVE Chat</span>
        <div className="user">
            <img className="res-img"src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
    
  )
}

export default Navbar;