import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Container'>
      <div className="logo">
        <h1>PBL</h1>
      </div>
       <div className="about">
        <h2>About Us</h2>
        <div className='about-text'>Welcome to Project Hub,where project managment meets simplicity.Our platform streamlines collaboration,scheduling and communication for teams of any size.No more juggling multiple tools - everything you need is in one place.Say hello to efficiency and goodbye to chaos.Join Project hub today andrevolutionize the way you manage projects.</div>    
        
       </div>
       <div className="mission">
        <h2>Mission</h2>
        <div className='mission-text'>Our mission is clear: to inspire and empower individuals through innovative and engaging Project-Based Learning experiences. We strive to redefine education by fostering a community that values creativity, critical thinking, and real-world application.</div>
       </div>
    </div>
  )
}

export default Footer
