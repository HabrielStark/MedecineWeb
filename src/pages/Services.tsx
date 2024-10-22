import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Heart, Activity, Microscope, Siren } from 'lucide-react';
import type { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      name: "General Health Check-up",
      description: "Comprehensive health assessment including blood work, vital signs, and consultation.",
      cost: "$200",
      icon: "Stethoscope"
    },
    {
      id: 2,
      name: "Neurological Assessment",
      description: "Complete brain and nervous system evaluation using advanced diagnostic tools.",
      cost: "$350",
      icon: "Brain"
    },
    {
      id: 3,
      name: "Cardiac Screening",
      description: "Heart health evaluation including ECG, stress test, and ultrasound.",
      cost: "$300",
      icon: "Heart"
    },
    {
      id: 4,
      name: "Advanced Diagnostics",
      description: "State-of-the-art imaging and laboratory testing services.",
      cost: "$400",
      icon: "Activity"
    },
    {
      id: 5,
      name: "Laboratory Services",
      description: "Comprehensive blood work and pathology services.",
      cost: "$150",
      icon: "Microscope"
    },
    {
      id: 6,
      name: "Emergency Care",
      description: "24/7 emergency medical services with experienced staff.",
      cost: "Varies",
      icon: "Siren"
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Stethoscope,
      Brain,
      Heart,
      Activity,
      Microscope,
      Siren
    };
    return icons[iconName as keyof typeof icons];
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Our Medical Services
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-semibold">
                    Starting from {service.cost}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};