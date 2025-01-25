import React, { useState } from 'react'
import './login.css';
import assets from '../../../src/assets/assets'

const login = () => {

  const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='login'>
        <img src={assets.logo_big} alt=""className='logo' />
        <form className='login-form'>
            <h2>{currState}</h2>
            {currState === "Sign up" ?<input type="text" placeholder='username' className='form-input' required/>:null}
            <input type="email" placeholder='Email Address' className='form-input' />
            <input type='password' placeholder='password' className='form-input'></input>
            <button type='submit'>{currState === "Sign up"?"Create an Account":"Login Now"}</button>
            <div className='login-term'>
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-format">
              {
                currState === "Sign up"
                ?
                <p className='login-toggle'>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                :
                <p className='login-toggle'>Create an Account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
              }
            </div>
        </form>
    </div>
  )
}

export default login