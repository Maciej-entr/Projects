import React from 'react'
import './components.css'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import profile from '../assets/profile.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import x from '../assets/x.png'
import cv from '../assets/cv.png'
const Main = () => {
  return (
    <div className="container">
        <img src={profile} className='profile' alt="Photo" />
        <h1>Maciej <br />Waszyński</h1>
        <p>Specialised in <br />Front-end developement</p>
        <div className="socials">
            <a href="https://www.linkedin.com/in/maciej-waszy%C5%84ski/"><img src={linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/Maciej-entr"><img src={github} alt="Github" /></a>
            <a href="https://www.facebook.com/maciej.waszynski.14/"><img src={facebook} alt="Facebook" /></a>
            <a href="https://www.youtube.com/@TheCSGuyDev"><img src={youtube} alt="Youtube" /></a>
            <a href="https://x.com/MattWaszynski"><img src={x} alt="X" /></a>
            <a href="https://www.tiktok.com/@user57129470588710"><img src={tiktok} alt="TikTok" /></a>
        </div>
    </div>
  )
}

export default Main