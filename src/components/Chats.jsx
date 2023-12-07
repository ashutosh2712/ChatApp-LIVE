import React from 'react'
import profile from '../assets/profileF.jpg'
const Chats = () => {
  return (
    <div className='chats'>
        <div className="user-chat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Sara</span>
                <p>Hello from other side</p>
            </div>
        </div> 
        <div className="user-chat">
            <img src="https://www.thesun.co.uk/wp-content/uploads/2018/09/NINTCHDBPICT000003896798.jpg?w=670" alt="" />
            <div className="userChatInfo">
                <span>Undertaker</span>
                <p>Rest in peace</p>
            </div>
        </div>
        <div className="user-chat">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bee66ba-7191-4b0c-9f0b-d43ea813cb5a/dewg6cx-4c09d6a5-6325-46f4-b88b-b46939f2accf.png/v1/fill/w_1000,h_707/brock_lesnar___wwe_png_2021_by_dznwo_dewg6cx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA3IiwicGF0aCI6IlwvZlwvMWJlZTY2YmEtNzE5MS00YjBjLTlmMGItZDQzZWE4MTNjYjVhXC9kZXdnNmN4LTRjMDlkNmE1LTYzMjUtNDZmNC1iODhiLWI0NjkzOWYyYWNjZi5wbmciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lo063pezvWJLMBPfly9HXAC6XotKcbD1oJCq6kOvedY" alt="" />
            <div className="userChatInfo">
                <span>Brock Lesnar</span>
                <p>F five</p>
            </div>
        </div>
        <div className="user-chat">
            <img src="https://www.tvguide.com/a/img/resize/f59fa74db516785727ce05fca85ce1c4cc948b3f/hub/2018/10/25/bd751cbe-3efa-4b9e-be3f-2018cea36f26/181025-wwenikkibella-news.jpg?auto=webp&fit=crop&height=1080&width=1920" alt="" />
            <div className="userChatInfo">
                <span>Nikki Bella</span>
                <p>You cant see me</p>
            </div>
        </div>
</div>
  )
}

export default Chats