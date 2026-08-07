import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 ease-out overflow-hidden group";
  
  const variants = {
    primary: "bg-accent text-background hover:scale-105",
    secondary: "bg-transparent border border-border text-text-primary hover:bg-white/5",
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </motion.button>
  );
};
