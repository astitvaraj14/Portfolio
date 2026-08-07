import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: <Briefcase size={20} />,
      title: "Software Developer Apprentice",
      org: "Commonwealth Bank of Australia",
      date: "Jul 2026 – Jan 2027"
    },
    {
      type: "leadership",
      icon: <Award size={20} />,
      title: "Front-end Developer & API Lead",
      org: "Smart India Hackathon 2025",
      date: "2025"
    },
    {
      type: "research",
      icon: <BookOpen size={20} />,
      title: "IJSREM Publication",
      org: "Project Management System Using CPM and PERT Techniques",
      date: "Published"
    }
  ];

  const certifications = [
    "Spring Associate Developer (Infosys Springboard)",
    "Python for Data Science",
    "Front-end Web Developer",
    "Software Engineering & Agile Development",
    "Google Cloud Skills Boost",
    "Tata Group Cybersecurity Analyst Job Simulation"
  ];

  return (
    <section id="experience" className="py-32 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Experience & Honors.
          </h2>
          <p className="text-text-muted">A timeline of my professional journey and achievements.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vertical Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Timeline</h3>
            <div className="relative border-l border-border ml-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-12 relative pl-10 group"
                >
                  <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-surface border border-border text-accent group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{exp.date}</span>
                    <h4 className="text-xl font-bold text-text-primary mb-1">{exp.title}</h4>
                    <p className="text-text-secondary">{exp.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Certifications</h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-5 flex items-start gap-4 hover:border-accent/50 transition-colors"
                >
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-text-secondary font-medium leading-relaxed">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
