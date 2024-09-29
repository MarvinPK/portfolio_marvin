import React from 'react';
import "./hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Je suis un développeur passionné par la création de belles applications web.</p>
      <a href="#projects" className="btn">Voir mes projets</a>
    </section>
  );
};

export default Hero;
