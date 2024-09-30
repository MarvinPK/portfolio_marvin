import React, { useEffect, useRef } from 'react';
import "./hero.css"

const Hero = () => {
  
  const pictureRef = useRef(null);
  const titleRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const pictureDiv = pictureRef.current;
      const rect = pictureDiv.getBoundingClientRect();

      const titleDiv = titleRef.current;



      // Si la div touche le haut de la fenêtre
      if (rect.top <= 50) {
        pictureDiv.classList.remove('rotateInverse');
        pictureDiv.classList.add('rotate');
        titleDiv.classList.remove('rotateInverse');
        titleDiv.classList.add('rotate');
      } else {
        pictureDiv.classList.remove('rotate');
        pictureDiv.classList.add('rotateInverse');
        titleDiv.classList.remove('rotate');
        titleDiv.classList.add('rotateInverse');

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
      <div id="picture" ref={pictureRef}>
        <img src="assets/img/me.jpg"/>
      </div>
    </section>
  );
};

export default Hero;
