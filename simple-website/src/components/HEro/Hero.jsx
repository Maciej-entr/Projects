import React from 'react'
import './Hero.css'
import pause from '../assets/pause.png'
import play from '../assets/play.png'
import arrow from '../assets/arrow.png'
const Hero = ({heroData, setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    const handleClick = () => {
        setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1)) 
    } 
  return (
    <div className="hero">
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="explore">
            <p>Explore the features</p>
            <img src={arrow} onClick={handleClick}/>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt="" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero