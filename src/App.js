import React, { useEffect, useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Experiences from './components/experiences/Experiences';
import "./App.css"

function App() {
  const followerRef = useRef(null); // Créer une référence pour le follower

  useEffect(() => {
      const follower = followerRef.current;

      // Fonction pour déplacer l'élément follower
      const handleMouseMove = (e) => {
          const x = e.clientX; // Position X de la souris
          const y = e.clientY + window.scrollY; // Position Y de la souris avec le défilement
          
          // Déplacer l'élément en suivant le curseur
          follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };

      // Ajouter l'événement de mouvement de la souris
      document.addEventListener('mousemove', handleMouseMove);

      // Nettoyer l'événement au démontage du composant
      return () => {
          document.removeEventListener('mousemove', handleMouseMove);
      };
  }, []); // [] signifie que l'effet ne s'exécute qu'une fois au montage

  return (
    <div>
     <div className="follower" ref={followerRef}></div>
      <Navbar />
      <Hero />
      <Technologies/>
      <Projects />
      <Experiences/>
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;