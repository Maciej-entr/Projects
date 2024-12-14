import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">MEAT-ology</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar