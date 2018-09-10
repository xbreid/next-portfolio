import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default class Header extends React.Component {
  render() {
    return (
      <div id="nav-container">
        <div id="nav-overlay"/>
        <div id="nav-fullscreen">
        <nav>
          <ul>
            <li><a id="head" className="home-head" href="/#home"><span>Home</span></a></li>
            <li><a id="head"  className="about-head" href="/about"><span>About</span></a></li>
            <li><a id="head" className="works-head" href="/works/tac"><span>Works</span></a></li>
            <li><a id="head" className="resume-head" target="_blank" href="https://drive.google.com/file/d/0B1uaZFI6UYNVVE4tWlUtTjdnU1U/view?usp=sharing"><span>Resume</span></a></li>
            <li><a id="head" className="contact-head" href="/#contact"><span>Contact</span></a></li>
          </ul>
        </nav>
          <div className="social">
            <a target="_blank" href="https://github.com/bar0191"><FaGithub size={30}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/brandon-reid/"><FaLinkedin size={30}/></a>
          </div>
        </div>
        <div>
        <a id="nav-toggle">
          <span/>
          <span/>
        </a>
        </div>
      </div>
    );
  }
}