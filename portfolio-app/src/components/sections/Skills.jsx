import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "C"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
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
      title: "Tools & Databases",
      skills: ["MySQL", "MongoDB", "SQLite", "Git", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Technical Stack.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            My arsenal of technologies used to build robust, scalable, and visually stunning applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm">
                  0{index + 1}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-pill px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
