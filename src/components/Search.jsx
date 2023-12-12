import React, { useContext, useState } from 'react'
import profile from '../assets/profile.jpg'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import {db} from '../firebase';
import {AuthContext} from "../context/AuthContext"
const Search = () => {
  const [username, setUsername] = useState("") 
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)

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
    if (e.code === "Enter" || e.code === "ArrowRight" || e.code === "Space") {
      handleSearch();
    }
  };
  const handleInput = (e) => {
    handleSearch();
  };

  const handleSelect =async () => {
    // check chat group(chat collection in firestore) exists ,if not create new one
    const combinedId =  currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid ;
   try {
    const res = await getDoc(doc(db, "chats", combinedId));

    if(!res.exists()){
      //create user chat in chats collecction
      await setDoc(doc(db, "chats", combinedId), { messages : [] });

      //create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid),{
        [combinedId+".userInfo"] : {
          uid: user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"] :serverTimestamp()
      });

      await updateDoc(doc(db, "userChats", user.uid),{
        [combinedId+".userInfo"] : {
          uid: currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL
        },
        [combinedId+".date"] :serverTimestamp()
      });
      
    }
  }catch(err) {}
    setUser(null);
    setUsername("");
  }
  return (
    <div className='search'>
        <div className="search-form">
            <input type="text" placeholder='Find user..' 
            onKeyDown={handleKey} 
            onInput={handleInput} 
            onChange={(e) => setUsername(e.target.value)} value={username}
            />
        </div>
            {err && <span style={{color:"red"}}>*User not found</span>}
            {user && <div className="user-chat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div> }    
    </div>
  )
}

export default Search