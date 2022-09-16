import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder="Find a User" />
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search