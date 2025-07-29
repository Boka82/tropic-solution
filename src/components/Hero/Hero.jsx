import React from 'react';
import './Hero.css';
import laptopImage from '../../assets/laptop.png';
import backgroundImage from '../../assets/poozadina.png';
import logo from '../../assets/logo-pbdKMAEB.svg';

const Hero = () => {
  return (
    <>      
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-logo-section">
              <div className="hero-logo">
                <img src={logo} alt="Tropic Tech Solutions" className="hero-logo-img" />
                <span className="hero-logo-text">
                  <span className="hero-logo-line1">TROPIC TECH</span>
                  <span className="hero-logo-line2">SOLUTIONS</span>
                </span>
              </div>
            </div>
            <div className="hero-content-section">
              <h1 className="hero-title">IT Solutions<br />that transform<br />your business</h1>
              <button className="hero-btn">learn more</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <img src={laptopImage} alt="IT Solutions - Laptop" className="hero-laptop" />
            </div>
          </div>
        </div>
      </section>
      
      <section 
        id="who-we-are" 
        className="who-we-are-section"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="who-we-are-overlay">
          <div className="container">
            <div className="who-we-are-content">
              <h1 className="who-we-are-title">Who We Are</h1>
              <p className="who-we-are-text">
                 Write a paragraph that talks about your company here. You can talk
                 about your company's background, history, mission, vision or
                 philosophy. Anything that will introduce your brand's persona to your
                 clients. This will help build a connection between you and them, that
                 hopefully leads into a working relationship.
              </p>             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;