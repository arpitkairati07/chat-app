import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
          <img src={assets.profile_img} alt="" srcset="" />
          <p>John Doe <img className='dot' src={assets.green_dot} alt="" srcset="" /></p>
          <img src={assets.help_icon} alt="" className='help'/>
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vero fugiat at.</p>
          <div>
            <img src={assets.profile_img} alt="" className='help'/>
            <p>4:00</p>
          </div>
        </div>

        <div className="s-msg">
          <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" className='help'/>
            <p>4:00</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vero fugiat at.</p>
          <div>
            <img src={assets.profile_img} alt="" className='help'/>
            <p>4:00</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder='Send a message'/>
        <input type="file" name="" id="image" accept='image/png , image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox