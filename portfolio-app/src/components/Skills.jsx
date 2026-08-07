import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "C"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "ML / AI",
      skills: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "SQLite", "Git", "GitHub", "Linux", "Postman"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-card">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
