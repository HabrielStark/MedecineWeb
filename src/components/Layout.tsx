import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, scale: 0.9, borderRadius: '50%' }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            borderRadius: '0%',
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.9, 
            borderRadius: '50%',
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          className="pt-16 min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};