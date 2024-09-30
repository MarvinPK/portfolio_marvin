import React, { useEffect, useRef } from 'react';
import "./hero.css"

const Hero = () => {
  
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const titleDiv = titleRef.current;
      const rect = titleDiv.getBoundingClientRect();
      if (rect.top <= 0) {
        titleDiv.classList.add('bouncy-title-all-scrolling');
      } 
    };

    // Ajouter l'écouteur d'événement de scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Ce useEffect s'exécute une seule fois à l'initialisation du composant

  return (
    <section id="hero" className="hero-section">
      <div className='title' ref={titleRef}>
       <div className='bouncy-title-one'>
          <p><h1>Hi, I am <b>Marvin</b></h1></p>
        </div>
        <div className='bouncy-title-two'>
          <p><h1> a <b>fullstack</b> and <b>smiling</b> 😊 developer.</h1></p>
        </div>
      </div>  
      <div id="picture">
        <img src="assets/img/me.jpg"/>
      </div>
    </section>
  );
};

export default Hero;
