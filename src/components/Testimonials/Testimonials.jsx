import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Boris Keser,',
    company: 'Wright Co.',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    name: 'Jovo Risovic,',
    company: 'Financial',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    name: 'Bojan Vukojevic,',
    company: 'Express',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  }
];

const TestimonialIcon = () => {
  return (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="none">
      <g fillOpacity="0.3">
        <path d="M0 45V15C0 6.7 6.7 0 15 0h7.5v7.5H15c-4.1 0-7.5 3.4-7.5 7.5v7.5H22.5v22.5H0z" fill="currentColor"/>
        <path d="M37.5 45V15C37.5 6.7 44.2 0 52.5 0H60v7.5h-7.5c-4.1 0-7.5 3.4-7.5 7.5v7.5H60v22.5H37.5z" fill="currentColor"/>
      </g>
    </svg>
  );
};

const PeopleIcon = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="30" cy="25" r="8"/>
      <path d="M16 55c0-8 6-15 14-15s14 7 14 15"/>
      <circle cx="50" cy="25" r="8"/>
      <path d="M36 55c0-8 6-15 14-15s14 7 14 15"/>
    </svg>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title testimonials-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <div className="testimonial-icon">
                  <PeopleIcon />
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <h4 className="testimonial-company">{testimonial.company}</h4>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;