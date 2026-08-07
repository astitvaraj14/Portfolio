import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Astitva<span>.</span></h2>
          <p>Building scalable software and modern web applications.</p>
        </div>
        
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:astitvarajfbg@gmail.com">astitvarajfbg@gmail.com</a></p>
          <p>Phone: +91 87897 09535</p>
          <p>Location: Bengaluru, Karnataka</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astitva Raj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
