import { getExperiencesWording, getHomeWording, getProjectsWording, getStacksWording } from "../../data/wording_data";
import "./navbar.scss"
import React  from 'react';


const Navbar = ({isUkLangage}) => {
  return (
    <nav className="navbar">
        <ul>
            <li><a href="#hero">{getHomeWording(isUkLangage)}</a></li>
            <li><a href="#stacks">{getStacksWording(isUkLangage)}</a></li>
            <li><a href="#projects">{getProjectsWording(isUkLangage)}</a></li>
            <li><a href="#experiences">{getExperiencesWording(isUkLangage)}</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marvin-prioux-khaye">
                    <img  id = "icon-linkedin" className="img-icon"  src="/assets/icons/linkedin-64.svg"  alt="Icon LinkedIN" />
                </a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
