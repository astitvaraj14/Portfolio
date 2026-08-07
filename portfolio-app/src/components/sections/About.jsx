import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';

const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <AnimatedText 
            text="About Me." 
            el="h2" 
            className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-2" 
          />
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 text-lg text-text-secondary leading-relaxed"
          >
            <p>
              I am a <span className="text-text-primary font-medium">Computer Science and Engineering</span> student at Don Bosco Institute of Technology with a CGPA of 9.44/10. 
              My journey in tech is driven by a deep fascination with building scalable software and crafting premium digital experiences.
            </p>
            <p>
              Specializing in <span className="text-accent font-medium">Full Stack Development</span>, I thrive at the intersection of robust backend engineering and beautiful, intuitive frontend design. 
              Whether it's deploying machine learning models, managing cloud infrastructure, or polishing micro-interactions on the web, I bring a holistic approach to engineering.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6 border-t border-l border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <h4 className="text-4xl font-bold text-accent mb-2">9.44</h4>
                <p className="text-sm text-text-muted uppercase tracking-wider">CGPA</p>
              </div>
              <div className="glass-card p-6 border-t border-l border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <h4 className="text-4xl font-bold text-accent mb-2">6+</h4>
                <p className="text-sm text-text-muted uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Education</h3>
              <div className="flex flex-col gap-8">
                
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                  <h4 className="text-lg font-semibold text-text-primary">B.E. Computer Science</h4>
                  <p className="text-text-secondary mb-1">Don Bosco Institute of Technology (VTU)</p>
                  <p className="text-sm text-accent font-medium">2023 – 2027</p>
                </div>

                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 bg-border rounded-full -left-[6.5px] top-1.5"></div>
                  <h4 className="text-lg font-semibold text-text-primary">Class XII (CBSE)</h4>
                  <p className="text-text-secondary mb-1">Sri Rani Saraswati Vidya Mandir</p>
                  <p className="text-sm text-text-muted">76.4%</p>
                </div>

              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Contact Info</h3>
              <ul className="flex flex-col gap-3 text-text-secondary">
                <li className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-text-primary text-right">Bengaluru, Karnataka</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Email</span>
                  <span className="text-accent text-right">astitvarajfbg@gmail.com</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
