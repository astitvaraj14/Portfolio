import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 border-t border-border overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-[100%] blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary mb-6"
          >
            Let's build something <br className="hidden md:block"/> 
            <span className="text-accent italic">extraordinary.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-xl"
          >
            Whether you have a project in mind or just want to say hi, my inbox is always open. Let's connect!
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:astitvarajfbg@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-text-primary text-background font-bold text-lg hover:scale-105 hover:bg-accent hover:text-background transition-all duration-300"
          >
            Say Hello <Mail className="ml-3 w-5 h-5" />
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-text-primary">
              Astitva<span className="text-accent">.</span>
            </span>
          </div>

          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Astitva Raj. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
