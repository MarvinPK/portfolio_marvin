import "./navbar.scss"
import React  from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#technologies">My stacks</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/marvin-prioux-khaye">
                    <img  id = "icon-linkedin" class="img-icon"  src="/assets/icons/linkedin-64.svg"  alt="Icon LinkedIN" />
                </a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
