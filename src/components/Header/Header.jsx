import React from 'react';
import './Header.css';
import logo from '../../assets/logo-pbdKMAEB.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Tropic Tech Solutions" className="logo-img" />
        <span className="logo-text">
          <span className="logo-line1">TROPIC TECH</span>
          <span className="logo-line2">SOLUTIONS</span>
        </span>
      </div>
      <nav>
        <a href="#who-we-are">Who We Are</a>
        <a href="#services">Services</a>
        <a href="#about">Why Choose Us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;