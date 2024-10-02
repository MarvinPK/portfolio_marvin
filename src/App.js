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

  const [isUkLangage, setIsUkLangage] = useState(true)

  return (
    <div>
      <img className='flagLanguage'
        style={{"cursor": "pointer", width:"fitContent", height:"fitContent", zIndex:"1"}}
        src= {`assets/icons/${isUkLangage ? "france-flag.svg" : "uk-flag.svg"}`} 
        onClick={()=>setIsUkLangage(!isUkLangage)}

        />
      <Navbar isUkLangage={isUkLangage}/>
      <Hero isUkLangage={isUkLangage} />
      <Technologies isUkLangage={isUkLangage}/>
      <Projects isUkLangage={isUkLangage}/>
      <Experiences isUkLangage={isUkLangage}/>
      <Contact isUkLangage={isUkLangage}/> 
      <Footer isUkLangage={isUkLangage}/>
    </div>
  );
}

export default App;