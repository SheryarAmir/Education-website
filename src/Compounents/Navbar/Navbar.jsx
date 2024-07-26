import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
const Navbar = () => {

  const [sticky ,setSticky]=useState(false);

useEffect(()=>{

  window.addEventListener('scroll',()=>{

    window.scrollY > 100 ? setSticky(true): setSticky(false)
  })

},[])

  return (
    <nav className={`container ${sticky ? "dark-nav" : " "}` }>
        
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About</li>
        <li>Campaus</li>
        <li>Testimomials</li>
        <button className='btn'>Contact Us</button>
      </ul>
    </nav>
  )
}

export default Navbar
