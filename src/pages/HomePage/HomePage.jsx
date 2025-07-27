import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import CallToAction from '../../components/CallToAction/CallToAction';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;