'use client';
import { motion } from 'framer-motion';
import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-6 animate-color-change"
      >
        About Intuitrix
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-lg text-gray-300 text-center"
      >
        Intuitrix is on a mission to revolutionize search and discovery with cutting-edge AI. Our team is passionate about making information retrieval intuitive, safe, and lightning-fast for everyone.
      </motion.p>
    </main>
  );
} 