import React from 'react';
import './Services.css';
import managedITImage from '../../assets/Managed IT Services.png';
import itSecurityImage from '../../assets/IT Security.png';
import itConsultingImage from '../../assets/IT Consulting.png';

const servicesData = [
  {
    title: 'Managed IT Services',
    description: 'Give a detailed description of the service being provided here.',
    image: managedITImage
  },
  {
    title: 'IT Security',
    description: 'Give a detailed description of the service being provided here.',
    image: itSecurityImage
  },
  {
    title: 'IT Consulting',
    description: 'Give a detailed description of the service being provided here.',
    image: itConsultingImage
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;