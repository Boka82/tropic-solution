// src/components/Services/Services.jsx

import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Managed IT Services',
    description: 'Detaljan opis usluge koja se pruža ovdje.',
  },
  {
    title: 'IT Security',
    description: 'Detaljan opis usluge koja se pruža ovdje.',
  },
  {
    title: 'IT Consulting',
    description: 'Detaljan opis usluge koja se pruža ovdje.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;