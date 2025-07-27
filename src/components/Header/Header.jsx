// src/components/Header/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">TROPIC TECH SOLUTIONS</div>
        {/* Ovdje se mogu dodati navigacijski linkovi po potrebi */}
        <nav>
          {/* <a href="#services">Our Services</a>
          <a href="#about">Why Choose Us</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;