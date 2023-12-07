import React from 'react'
import profile from '../assets/profile.jpg'
const Search = () => {
  return (
    <div className='search'>
        <div className="search-form">
            <input type="text" placeholder='Find user..'/>
        </div>
            <div className="user-chat">
                <img src="https://assets.telegraphindia.com/telegraph/2021/Jun/1623340223_loki_review.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Loki</span>
                </div>
            </div>    
    </div>
  )
}

export default Search