import React, { useState } from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {

    const [action,setAction] = useState("Sign Up")
    

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"? <div></div>: 
            <div>
            <label htmlFor="text">Username</label>
                <div className="input">
                    <input type="text" placeholder='user1234'/>
                </div>
                </div>
            }
            <label htmlFor="email" calssName='email'>E-mail</label>
            <div className="input">
                <input type="email" placeholder='example@example.com'/>
            </div>
            <label htmlFor="password">Password</label>
            <div className="input">
                <input type="password" placeholder='example1234'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:
         <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        }
        <div className="submit-container">
        <div className={action==="Login"? "submit gray":"submit"} onClick ={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick ={() => {setAction("Login")}}>Login</div>
</div>
    </div>
  )
}

export default LoginSignUp