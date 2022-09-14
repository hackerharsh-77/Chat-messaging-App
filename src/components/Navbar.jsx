import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Chat app</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar