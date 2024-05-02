import React from 'react';
import './header.css'
import { Link } from "react-scroll";
const header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1>D<span>D</span></h1>
      </div>
      <div className='header__right'>
      <Link to='aboutMe' smooth={true} duration={500}><h4>About Me</h4></Link>
      <Link to='skills' smooth={true} duration={500}><h4>Skills</h4></Link>
      <Link to='projects' smooth={true} duration={500}><h4>Projects</h4></Link>
      <Link to='contact me' smooth={true} duration={500}><h4>Contact Me</h4></Link>
      </div>
    </div>
  )
}

export default header
