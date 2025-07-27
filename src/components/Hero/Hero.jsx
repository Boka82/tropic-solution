// src/components/Hero/Hero.jsx

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">IT Solutions that transform your business</h1>
          <h2>Who We Are</h2>
          <p>
            Ovdje napišite paragraf o vašoj kompaniji. Možete govoriti o pozadini, historiji, misiji, viziji ili filozofiji vaše kompanije. Bilo šta što će predstaviti personu vašeg brenda klijentima.
          </p>
          <a href="#contact" className="btn">Book a free consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;