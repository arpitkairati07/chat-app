import React, { useState } from 'react'
import './profileupdate.css'
import assets from '../../assets/assets'

const profileupdate = () => {
  const[image,setImage]=useState(false);
  return (
    <div className='profile'>
      <div className="profile-container">
        <form className='profile-form'>
          <h3>Profile Update</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png , .jpg , .jpeg' hidden/>
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="profile" />
            Upload Profile Image
          </label>
          <input type="text" placeholder='Your Name' required />
          <textarea placeholder='Write about Yourself' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className='profile-pic' src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default profileupdate