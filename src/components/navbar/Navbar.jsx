import "./navbar.scss"
import React  from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li>
                <a href="#hero">
                    <img id = "icon-home" class="img-icon"  src="/assets/icons/home.svg"  alt="Icon maison" />
                </a>
            </li>
            <li><a href="#about">A Propos de moi</a></li>
            <li><a href="#projects">Réalisations professionnelles</a></li>
            <li><a href="#projects">Réalisations fictives</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/lola-caillaud-9a7999195">
                    <img  id = "icon-linkedin" class="img-icon"  src="/assets/icons/linkedin-64.svg"  alt="Icon LinkedIN" />
                </a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
