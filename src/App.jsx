import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Login from './Pages/Login/login.jsx'; 
import Chat from './Pages/Chat/chat.jsx'; 
import ProfileUpdate from './Pages/Profile Update/profileupdate.jsx'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase.js';
import { AppContext } from './context/AppContext.jsx';


const App = () => {
  const navigate = useNavigate();

  const {loadUSerData}=useContext(AppContext)
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        navigate('/chat')
        // console.log(user);
        await loadUSerData(user.uid);
      }else{
        navigate('/')
      }
    })
  },[])
  
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
