import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Eco-Friendly Route Planner",
      tech: ["React", "Node.js", "Maps API"],
      desc: "An application to calculate and suggest the most eco-friendly routes for vehicles, minimizing carbon footprint.",
      image: "/projects/eco_route.png",
      color: "from-emerald-500/20 to-teal-900/20"
    },
    {
      title: "Project Management System",
      tech: ["Spring Boot", "React", "MySQL"],
      desc: "System implementing CPM & PERT techniques for efficient project scheduling and tracking.",
      image: "/projects/pm_system.png",
      color: "from-blue-500/20 to-indigo-900/20"
    },
    {
      title: "Mall Customer Segmentation",
      tech: ["Python", "Autoencoders", "Scikit-Learn"],
      desc: "ML model using Autoencoders to segment mall customers based on purchasing behavior.",
      image: "/projects/customer_seg.png",
      color: "from-purple-500/20 to-fuchsia-900/20"
    },
    {
      title: "Vehicle Fuel Economy Analysis",
      tech: ["Machine Learning", "Pandas"],
      desc: "Analysis and SmartWay Prediction model for vehicle fuel economy.",
      image: "/projects/fuel_economy.png",
      color: "from-orange-500/20 to-red-900/20"
    },
    {
      title: "VTU SGPA & Rank Calculator",
      tech: ["JavaScript", "HTML", "CSS"],
      desc: "Utility tool for university students to calculate their SGPA and predict ranks.",
      image: "/projects/rank_calculator.png",
      color: "from-cyan-500/20 to-blue-900/20"
    },
    {
      title: "Gamified Learning Platform",
      tech: ["React", "Node.js", "MongoDB"],
      desc: "An engaging platform designed to bring quality education to rural areas through gamification.",
      image: "/projects/gamified_learning.png",
      color: "from-yellow-500/20 to-amber-900/20"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-2">
              Featured Work.
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
          </div>
          <p className="text-text-muted max-w-md">
            A selection of my recent projects focusing on scalable architecture, machine learning, and clean UI/UX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden flex flex-col h-full"
            >
              {/* Thumbnail Placeholder */}
              <div className={`h-56 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
