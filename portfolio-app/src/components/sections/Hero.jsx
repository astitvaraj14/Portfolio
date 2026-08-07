import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3 glass-pill px-4 py-2 w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-text-secondary">Available for work</span>
          </div>

          {/* Main Typography */}
          <div className="mb-6">
            <AnimatedText 
              text="Astitva Raj." 
              el="h1"
              className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2" 
            />
            <AnimatedText 
              text={["Full Stack Developer &", "Creative Engineer"]}
              el="h2"
              className="text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-accent to-white/70"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-text-secondary text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light"
          >
            I craft cinematic, high-performance web experiences and scalable software solutions. 
            Currently based in Bengaluru, blending robust engineering with <span className="text-white font-medium">modern design</span>.
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#projects">
              <Button variant="primary" className="group">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">
                Contact Me
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/astitva-raj-444786292/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:astitvarajfbg@gmail.com" className="text-text-muted hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Premium Framed Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
          className="relative hidden lg:flex items-center justify-center h-[650px] w-full"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-accent/20 rounded-full blur-[120px] -z-10" />
          
          {/* Main Photo Frame */}
          <motion.div 
            whileHover={{ y: -10, rotate: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.4 }
            }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 bg-surface"
          >
            {/* Image Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <img 
              src="/Astitva.jpg" 
              alt="Astitva Raj" 
              className="w-full h-full object-cover object-[50%_20%] relative z-0 transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
