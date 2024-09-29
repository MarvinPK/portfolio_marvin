import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/AboutMe';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
     <Projects />
     <Contact /> 
      <Footer />
    </div>
  );
}

export default App;