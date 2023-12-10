import React, { useState } from 'react'
import profile from '../assets/profile.jpg'
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../firebase'
const Search = () => {
  const [username, setUsername] = useState("") 
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async() => {
    const q = query(collection(db, "users"), where("displayName", "==", username)); 
    console.log(username);
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(user);
     });
    }catch(err) {
      console.log(err);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className='search'>
        <div className="search-form">
            <input type="text" placeholder='Find user..' onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)}/>
        </div>
            {err && <span style={{color:"red"}}>*User Not Found</span>}
            {user && <div className="user-chat">
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div> }    
    </div>
  )
}

export default Search