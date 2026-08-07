import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content animate-fade-in-up">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name">Astitva Raj</h1>
        <h3 className="title">Full Stack Developer & CS Student</h3>
        <p className="summary">
          Based in Bengaluru, Karnataka. Passionate about scalable software, continuous learning, 
          and building impactful applications with modern technologies like React, Spring Boot, and Machine Learning.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="glow-circle top-right"></div>
      <div className="glow-circle bottom-left"></div>
    </section>
  );
};

export default Hero;
