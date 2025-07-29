import React from 'react';
import './WhyChooseUs.css';


const Icon = ({ type }) => {
  switch (type) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      );
    case 'checklist':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          <line x1="9" y1="12" x2="11" y2="14"/>
          <line x1="11" y1="14" x2="15" y2="10"/>
          <line x1="9" y1="16" x2="11" y2="18"/>
          <line x1="11" y1="18" x2="15" y2="14"/>
        </svg>
      );
    case 'monitor':
      return (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      );
    default:
      return null;
  }
};

const featuresData = [
  {
    icon: 'globe',
    title: 'We are global.',
    description: "No matter where you are, we've got you covered."
  },
  {
    icon: 'checklist',
    title: 'We value our clients.',
    description: 'Virtual assistance. Talk to us about any concerns, 24/7.'
  },
  {
    icon: 'monitor',
    title: 'We use top-rate systems.',
    description: 'Easy peasy UI. Our interface is simple and easy to use.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="why-choose-us-section">
      <div className="why-choose-us-overlay">
        <div className="container">
          <div className="why-choose-us-content">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              {featuresData.map((feature, index) => (
                <div key={index} className="feature-wrapper">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <Icon type={feature.icon} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;