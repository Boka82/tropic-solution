import React from 'react';
import './Hero.css';
import laptopImage from '../../assets/laptop.png';
import backgroundImage from '../../assets/poozadina.png';

const Hero = () => {
  return (
    <>      
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">IT Solutions that transform your business</h1>
            <p className="hero-subtitle">
              Professional IT services that help your business grow and succeed in the digital world.
            </p>
            <a href="#contact" className="btn btn-primary">learn more</a>
          </div>
          <div className="hero-image">            
            <img src={laptopImage} alt="IT Solutions - Laptop" className="hero-img" />
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
              <h2 className="who-we-are-title">Who We Are</h2>
              <p className="who-we-are-text">
                We are TropicSolutions, a leading provider of comprehensive IT services and solutions. 
                Our mission is to help businesses leverage technology to achieve their goals through 
                reliable, innovative, and cost-effective IT solutions. With years of experience in 
                the industry, we understand the unique challenges businesses face in today's digital landscape.
              </p>
              <p className="who-we-are-text">
                Our team of certified professionals is dedicated to delivering excellence in every project, 
                ensuring your technology infrastructure supports your business objectives and drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;