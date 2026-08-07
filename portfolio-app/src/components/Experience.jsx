import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Experience & Achievements</h2>
      
      <div className="experience-grid">
        <div className="experience-column">
          <h3 className="column-title">Work & Leadership</h3>
          <div className="timeline">
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>Software Developer Apprentice</h4>
              <h5>Commonwealth Bank of Australia</h5>
              <span className="date">Jul 2026 – Jan 2027</span>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>Front-end Developer & API Integration Lead</h4>
              <h5>Smart India Hackathon 2025</h5>
            </div>
          </div>
        </div>

        <div className="experience-column">
          <h3 className="column-title">Research & Certifications</h3>
          <div className="timeline">
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>IJSREM Publication</h4>
              <h5>Project Management System Using CPM and PERT Techniques</h5>
            </div>
            
            <div className="certifications glass-card mt-2">
              <h4>Certifications</h4>
              <ul className="cert-list">
                <li>Spring Associate Developer (Infosys Springboard)</li>
                <li>Python for Data Science</li>
                <li>Front-end Web Developer</li>
                <li>Software Engineering & Agile Development</li>
                <li>Google Cloud Skills Boost</li>
                <li>Tata Group Cybersecurity Analyst Job Simulation (Forage)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
