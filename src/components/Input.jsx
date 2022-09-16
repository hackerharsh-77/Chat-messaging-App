import React from 'react'
import attach from "../img/attach.png"
import img from "../img/img.png"

function Input() {
  return (
    <div className='input'>
      <input  type="text" placeholder='Type Something ...' />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlfor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input