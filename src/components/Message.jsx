import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

export const Message = ({message}) => {
  
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bfYiqpFmDkRpg-B2tspMCkLpQrz9gt9egw&usqp=CAU" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Charanya-Kannan.jpg?itok=vSbk0no5" alt="" />
      </div>
    </div>
  )
}
