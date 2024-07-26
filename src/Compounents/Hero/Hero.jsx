import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better eduction for a better world</h1>
        <p>Our cutting-edge curriclum is designed to empower students with the knowlege, skill, and expriences needed to excle in the dynamic filed of eduction </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
