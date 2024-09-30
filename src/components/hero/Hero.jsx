import React from 'react';
import "./hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div id="presentation">
       <div className='bouncy-title'>
          <p><h1>Hi, I am <b>Marvin</b></h1></p>
          <p><h1> a <b>fullstack</b> and <b>smiling</b> developpeur.</h1></p>
       </div> 
       <div className='bouncy-triangle'>       
        <div class="triangle-border">
          <div class="triangle-inner"></div>
        </div>
      </div>
      </div>
      <div id="picture">
        <img src="assets/img/me.jpg"/>
      </div>
    </section>
  );
};

export default Hero;
