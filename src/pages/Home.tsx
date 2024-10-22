import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Activity,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art diagnostic tools for accurate results',
    },
    {
      icon: Brain,
      title: 'Expert Specialists',
      description: 'World-class medical professionals at your service',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans for optimal outcomes',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ 
            scale: [1, 1.02, 1],
            filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 dark:from-blue-900/40 dark:to-green-800/40" />
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
            alt="Medical Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold neon-text mb-6"
          >
            The Future of Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Experience cutting-edge medical care with our innovative approach
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 neon-border text-[#00f3ff] rounded-full transition-all group hover:bg-[#00f3ff]/10"
            >
              Book Appointment
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="floating-card p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-[#00f3ff] mb-4" />
                <h3 className="text-xl font-semibold mb-2 neon-text">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};