import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 10;
      const angleY = (centerX - x) / 10;
      
      button.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 magnetic-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="theme-toggle-orb"
        animate={{
          rotate: isDarkMode ? 180 : 0,
          backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
          boxShadow: isDarkMode 
            ? '0 0 20px #00f3ff, 0 0 40px #00f3ff' 
            : '0 0 20px rgba(0, 243, 255, 0.5)'
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          animate={{
            background: isDarkMode 
              ? 'radial-gradient(circle at 70% 70%, #00f3ff, #1a1a1a)' 
              : 'radial-gradient(circle at 30% 30%, #ffffff, #00f3ff)'
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.button>
  );
};