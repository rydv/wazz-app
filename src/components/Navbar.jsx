import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WazzUp</span>
      <div className="user">
        <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Charanya-Kannan.jpg?itok=vSbk0no5" alt="" />
        <span>Ramya</span>
        <button>logout</button>
      </div>
    </div>
  )
}
