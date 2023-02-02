import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
      <input type="text" placeholder='search a user'/>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Napw0Q6qX184KpJrT5oNxD9b8lFJ2q2jsovOPlE3emHay5vJEM1GeCQTRX9AfiLOw8s&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Yash</span>
        </div>
      </div>
    </div>
    
  )
}
