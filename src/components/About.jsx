import React from 'react'
import aboutimage from '../images/about.png';


function About() {
  return (
   <div id="about" data-aos="fade-in">
    <div className="about-text">
        <h1>UPCOMMING EVENT</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione consequatur tempore rerum aliquam, fuga ut accusamus. Atque ipsam eligendi suscipit debitis necessitatibus aspernatur praesentium ipsa dolore, magni libero quis recusandae!</p>
        <button>Read More</button>
    </div>
    <div className="about-image">
        <img src={aboutimage} alt=""  />
    </div>
   </div>
  )
}

export default About
