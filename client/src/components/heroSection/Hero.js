import React from 'react'
import { useNavigate } from 'react-router-dom'
import './hero.css'

const Hero = () => {
  const navigate = useNavigate()

  const navigateSignup = () => {
    navigate('/signup');
  }

  return (
    <>
    <div id='hero'>
    <div className="hero-img">
        <img id='hero-image' src="/assets/hero-image-new.png" alt="" />
    </div>
    <div className="hero-text">
        <img src="/assets/image3.png" alt="" />
        <p id='p1'>- “The Dating Website that's all about Real Connections”</p>
        <p id='p2'>Experience the excitement of meeting someone new through blynd dates.</p>
        <button id='get-started' onClick={navigateSignup}>Get Started</button>
    </div>
   
    </div>
    </>
  )
}

export default Hero