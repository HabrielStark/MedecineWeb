import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Specialist } from '../types';

export const Specialists: React.FC = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  const specialists: Specialist[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
      bio: "Leading expert in neurological disorders with 15 years of experience in treating complex brain conditions.",
      experience: 15
    },
    {
      id: 2,
      name: "Dr. Michael Roberts",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
      bio: "Renowned cardiologist specializing in preventive care and advanced heart treatments.",
      experience: 12
    },
    {
      id: 3,
      name: "Dr. Emily Thompson",
      specialty: "Oncology",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
      bio: "Pioneering researcher in cancer treatments with a focus on personalized medicine approaches.",
      experience: 18
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Our Medical Specialists
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onClick={() => setSelectedSpecialist(specialist)}
            >
              <div className="relative overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{specialist.name}</h3>
                  <p className="text-blue-300">{specialist.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialist Detail Modal */}
        {selectedSpecialist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSpecialist(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex gap-6">
                <img
                  src={selectedSpecialist.image}
                  alt={selectedSpecialist.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedSpecialist.name}
                  </h3>
                  <p className="text-blue-500 mb-4">{selectedSpecialist.specialty}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedSpecialist.bio}</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experience: {selectedSpecialist.experience} years
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};