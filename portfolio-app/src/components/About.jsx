import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-text glass-card">
          <h3>Professional Summary</h3>
          <p>
            I am a Computer Science and Engineering student at Don Bosco Institute of Technology with a CGPA of 9.44/10. 
            I specialize in Full Stack Development and have a keen interest in Machine Learning and Cloud Technologies.
          </p>
          <p>
            With a strong foundation in Data Structures & Algorithms, OOP, DBMS, and OS, I enjoy building scalable software 
            and exploring new challenges. My technical toolkit includes Spring Boot, React.js, Node.js, and Python.
          </p>
          
          <div className="personal-info">
            <div className="info-item">
              <span className="label">Location:</span>
              <span className="value">Bengaluru, Karnataka</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">astitvarajfbg@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="education-container">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>B.E. Computer Science and Engineering</h4>
              <h5>Don Bosco Institute of Technology (VTU)</h5>
              <span className="date">2023 – 2027</span>
              <p className="score">CGPA: 9.44/10</p>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>Class XII</h4>
              <h5>Sri Rani Saraswati Vidya Mandir (CBSE)</h5>
              <p className="score">Percentage: 76.4%</p>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h4>Class X</h4>
              <h5>Sri Rani Saraswati Vidya Mandir (CBSE)</h5>
              <p className="score">Percentage: 89.4%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
