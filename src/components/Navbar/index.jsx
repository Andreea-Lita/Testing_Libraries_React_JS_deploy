// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="logo">My Website</div>
      <ul className="nav-menu">
        <li onClick={removeActive}>
          <a href="#home">Home</a>
        </li>
        <li onClick={removeActive}>
          <a href="#about">About</a>
        </li>
        <li onClick={removeActive}>
          <a href="#services">Services</a>
        </li>
        <li onClick={removeActive}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
