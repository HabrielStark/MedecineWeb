import React from 'react';
import { motion } from 'framer-motion';
import type { Technology } from '../types';

export const Technology: React.FC = () => {
  const technologies: Technology[] = [
    {
      id: 1,
      name: "AI Diagnostic Assistant",
      description: "Advanced artificial intelligence system that assists in accurate medical diagnoses using pattern recognition and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "3D Imaging Technology",
      description: "State-of-the-art 3D imaging systems providing detailed visualizations for precise surgical planning and diagnosis.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Remote Patient Monitoring",
      description: "Continuous remote monitoring system allowing real-time tracking of patient vital signs and health metrics.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold neon-text mb-12 text-center"
        >
          Our Medical Technology
        </motion.h1>

        <div className="space-y-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <motion.div 
                className="flex-1 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                  <motion.div 
                    className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
              <div className="flex-1 space-y-6">
                <motion.h2 
                  className="text-3xl font-bold neon-text"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {tech.name}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {tech.description}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent neon-border text-[#00f3ff] rounded-lg hover:bg-[#00f3ff]/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};