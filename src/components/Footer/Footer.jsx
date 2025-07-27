// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-cta">
          <h2>Let's work together!</h2>
          <a href="mailto:hello@tropic.com" className="btn">Book a free consultation</a>
        </div>
        <div className="footer-contact">
          <div>
            <h4>PHONE</h4>
            <p>123-456-7890</p>
          </div>
          <div>
            <h4>EMAIL</h4>
            <p>hello@tropic.com</p>
          </div>
          <div>
            <h4>SOCIAL</h4>
            {/* Ovdje dodajte linkove/ikone za društvene mreže */}
            <p>Facebook / LinkedIn</p>
          </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} TROPIC TECH SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;