import React from 'react'
import "./TopContainer.css"
import {Element} from "react-scroll"
function TopContainer() {
  return (
    <Element name='aboutMe' className='TopContainer'>
       <div className='topContent'>
        <h3>I'M</h3>
        <h1>Dheena<span>dayalan</span></h1>
        <h6>currently a bachelor's student at <span>kahe</span></h6>
        <a href='www.google.com'><button className='topContent__downloadButton'>Download CV</button></a>
        <a href='www.google.com'><button className='topContent__contactButton'>Contact Me</button></a>
       </div>
    </Element>
  )
}

export default TopContainer
