import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Technologies from './components/technologies/Technologies';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Experiences from './components/experiences/Experiences';
import "./App.css"

function App() {

  const [isUkLangage, setIsUkLangage] = useState(false)

  return (
    <div>
      <img className='flagLanguage'
        style={{"cursor": "pointer", width:"fitContent", height:"fitContent", zIndex:"1"}}
        src= {`assets/icons/${isUkLangage ? "france-flag.svg" : "uk-flag.svg"}`} 
        onClick={()=>setIsUkLangage(!isUkLangage)}

        />
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