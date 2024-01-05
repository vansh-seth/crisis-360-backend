import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'
import  logo from "./whitelogo.png";
import { useEffect, useState } from 'react';


const Navbar = () => {

  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarOpaque(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
        
        <nav className={`navbar ${isNavbarOpaque ? "opaque" : ""}`}>
        <div className='logonav'><img src={logo} alt='logo' height="90px" width="90px"/></div>
          <div>
            <ul id='navbar'>
              <li><NavLink to="/" exact activeclassName="active"><a>ABOUT</a></NavLink></li>
              <li><NavLink to="/helpline">HELPLINE</NavLink></li>
              <li><NavLink to="/map">MAP</NavLink></li>
              <li><NavLink to="/alert">ALERT</NavLink></li>
              <li><NavLink to="/login">LOGIN</NavLink></li>
              <li><NavLink to="/profile">PROFILE</NavLink></li>
            </ul>
          </div>
        </nav>
        
      
      
    </>
  )
}

export default Navbar
