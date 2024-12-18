import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../assets/frontend_assets/assets'
const LoginPopUp = ({setShowLogin}) => {

const[currState,setCurrState] = useState("SingUp")

  return (
    <div className="login-popup">
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="LogIn"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{currState==="SignUp"?"Create account":"LogIn"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing I agree to the terms of use & privacy policy</p>
            </div>
            {currState==="LogIn"
            ?<p>Create a new account? < span onClick={()=>setCurrState("SignUp")}>Click Here!</ span ></p>:
            <p>Already have an account? < span onClick={()=>setCurrState("LogIn")}>Log in here!</ span ></p>
            }
           </form>
    </div>
  )
}

export default LoginPopUp