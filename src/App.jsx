import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login/login.jsx'; 
import Chat from './Pages/Chat/chat.jsx'; 
import ProfileUpdate from './Pages/Profile Update/profileupdate.jsx'; 
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/profile update" element={<ProfileUpdate/>} />
      </Routes>
    </>
  );
};

export default App;
