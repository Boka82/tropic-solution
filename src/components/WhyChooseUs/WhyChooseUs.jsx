import React from 'react';
import './WhyChooseUs.css';


const Icon = ({ type }) => {
  const iconStyle = {
    width: '80px',
    height: '80px',
    stroke: '#4fd1c7',
    fill: 'none',
    strokeWidth: '2'
  };

  switch (type) {
    case 'globe':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      );
    case 'checklist':
      return (
        <svg style={iconStyle} viewBox="0 0 24 24">
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
        <svg style={iconStyle} viewBox="0 0 24 24">
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
            <h2 className="section-title" style={{
              color: '#4fd1c7',
              fontSize: '3rem',
              marginBottom: '3rem',
              fontWeight: '300',
              letterSpacing: '1px',
              textAlign: 'center'
            }}>Why Choose Us</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: '2rem',
              maxWidth: '900px',
              margin: '2rem auto 0 auto',
              padding: '0 2rem',
              width: '100%'
            }}>
              {featuresData.map((feature, index) => (
                <div key={index} style={{
                  flex: '0 1 280px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    background: 'transparent',
                    border: '2px solid #4fd1c7',
                    borderRadius: '40px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '280px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 30px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon type={feature.icon} />
                    </div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      color: '#4fd1c7',
                      marginBottom: '2rem',
                      fontWeight: '300'
                    }}>{feature.title}</h3>
                    <p style={{
                      color: '#ecf0f1',
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      margin: '0',
                      opacity: '0.9'
                    }}>{feature.description}</p>
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