// src/pages/HomePage/HomePage.jsx

import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
// Import ostalih komponenti koje ćete kreirati (WhyChooseUs, Testimonials, itd.)
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;