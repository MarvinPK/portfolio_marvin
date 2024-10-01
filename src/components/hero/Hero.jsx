import React from 'react';
import "./hero.css"

const Hero = () => {
  
  return (
    <section id="hero" className="hero-section">
      <div className='title'>
       <div className='bouncy-title-one'>
          <p><h1>Hi, I am <b>Marvin</b></h1></p>
        </div>
        <div className='bouncy-title-two'>
          <p><h1> a <b>fullstack</b> and <b>smiling</b> 😊 developer.</h1></p>
        </div>
      </div>  
      <div id="picture">
        <img src="assets/img/me.jpg" alt="me"/>
      </div>
    </section>
  );
};

export default Hero;
