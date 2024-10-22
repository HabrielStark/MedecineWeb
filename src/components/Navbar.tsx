import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/specialists', label: 'Specialists' },
    { path: '/services', label: 'Services' },
    { path: '/technology', label: 'Technology' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Stethoscope className="w-8 h-8 text-[#00f3ff]" />
            </motion.div>
            <span className="text-xl font-bold neon-text">MediTech</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <motion.span
                  className="text-[#00f3ff] transition-colors relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 h-0.5 bg-[#00f3ff] bottom-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};