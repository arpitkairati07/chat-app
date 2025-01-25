import React from 'react'
import './chat.css';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import ChatBox from '../../components/ChatBox/ChatBox';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar></LeftSideBar>
        <ChatBox></ChatBox>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  )
}

export default chat