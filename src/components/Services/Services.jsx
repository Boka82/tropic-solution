import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Managed IT Services',
    description: 'Comprehensive IT management and support to keep your business running smoothly. From network monitoring to system maintenance, we handle it all.',
      },
  {
    title: 'IT Security',
    description: 'Protect your business with enterprise-grade security solutions. Cybersecurity monitoring, threat detection, and data protection services.',
      },
  {
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help your business grow. Technology planning, digital transformation, and IT strategy development.',
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
              <div className="service-icon">
                <div className="icon-placeholder"></div>
              </div>
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