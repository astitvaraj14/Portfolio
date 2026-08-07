import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Eco-Friendly Route Planner",
      tech: "React, Node.js, Maps API",
      desc: "An application to calculate and suggest the most eco-friendly routes for vehicles, minimizing carbon footprint."
    },
    {
      title: "Project Management System",
      tech: "Spring Boot, React, MySQL",
      desc: "System implementing CPM & PERT techniques for efficient project scheduling and tracking."
    },
    {
      title: "Mall Customer Segmentation",
      tech: "Python, Autoencoders, Scikit-Learn",
      desc: "ML model using Autoencoders to segment mall customers based on purchasing behavior."
    },
    {
      title: "Vehicle Fuel Economy Analysis",
      tech: "Machine Learning, Pandas",
      desc: "Analysis and SmartWay Prediction model for vehicle fuel economy."
    },
    {
      title: "VTU SGPA & Rank Calculator",
      tech: "JavaScript, HTML, CSS",
      desc: "Utility tool for university students to calculate their SGPA and predict ranks."
    },
    {
      title: "Gamified Learning Platform",
      tech: "React, Node.js, MongoDB",
      desc: "An engaging platform designed to bring quality education to rural areas through gamification."
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech}</p>
              <p className="project-desc">{project.desc}</p>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">View Details &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
