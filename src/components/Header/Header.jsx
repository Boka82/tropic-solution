import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">TropicSolutions</div>
        <nav>
          <a href="#who-we-are">Who We Are</a>
          <a href="#services">Services</a>
          <a href="#about">Why Choose Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;