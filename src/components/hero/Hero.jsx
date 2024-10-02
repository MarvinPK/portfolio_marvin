import React from 'react';
import "./hero.scss"
import { getFirstPresentationSentenceHero, getSecondPresentationSentenceHero } from '../../data/wording_data';

const Hero = ({isUkLangage}) => {
  
  return (
    <section id="hero" className="hero-section">
      <div className='title'>
       <div className='bouncy-title-one'>
          {getFirstPresentationSentenceHero(isUkLangage)}
        </div>
        <div className='bouncy-title-two'>
          {getSecondPresentationSentenceHero(isUkLangage)}
        </div>
      </div>  
      <div id="picture">
        <img src="assets/img/me.jpg" alt="me"/>
      </div>
    </section>
  );
};

export default Hero;
