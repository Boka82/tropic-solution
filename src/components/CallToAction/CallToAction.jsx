import React from 'react';
import './CallToAction.css';
import pozadina5 from '../../assets/pozadina5.png';

const CallToAction = () => {
  return (
    <section className="call-to-action-section">
      <div className="call-to-action-background">
        <div className="call-to-action-overlay">
          <div className="container">
            <div className="call-to-action-content">
              <h2 className="call-to-action-title">
                Grab the reader's attention with a descriptive line that hypes your event, product or service. A short and relevant quote works, too!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
