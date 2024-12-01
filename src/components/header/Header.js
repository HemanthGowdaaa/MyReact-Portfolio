import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AgustinaFont from './Agustina.otf';

function Header() {
  const fontStyle = {
    fontFamily: 'Agustina, sans-serif',
    src: `url(${AgustinaFont}) format('opentype')`,
  };

  // Function to close the menu
  const closeMenu = () => {
    document.getElementById('menu-btn').checked = false;
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        <span className="logo-name" style={fontStyle}>HK</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/certificates" onClick={closeMenu}>Education</Link></li>
        <li><Link to="/Experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
      </ul>
    </div>
  );
}

export default Header;
