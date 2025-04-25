'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [waitlistRef, waitlistInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <main className="min-h-screen bg-dark-100 text-white relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#007AFF",
            },
            links: {
              color: "#007AFF",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300/50 via-primary/5 to-dark-300/50 animate-gradient-x"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x">
                Intuitrix
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Elevate your search experience with AI-powered vector and semantic search solutions
            </motion.p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,122,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,122,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-all"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-20 bg-dark-200/80 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<MagnifyingGlassIcon className="h-8 w-8 text-primary" />}
              title="Vector Search"
              description="Transform your search capabilities with our advanced vector search technology"
            />
            <FeatureCard
              icon={<PhotoIcon className="h-8 w-8 text-primary" />}
              title="Image Search"
              description="Powerful semantic image search that understands context and content"
            />
            <FeatureCard
              icon={<CodeBracketIcon className="h-8 w-8 text-primary" />}
              title="SVG Search"
              description="Intelligent vector graphics search for your design assets"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-dark-100/90 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="99.9%" label="Accuracy" />
            <StatCard number="50ms" label="Average Response Time" />
            <StatCard number="1M+" label="Searches Per Day" />
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div ref={waitlistRef} className="py-20 bg-dark-200/80 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={waitlistInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary">
              Join the Waitlist
            </h2>
            <p className="text-gray-300 mb-8">
              Be among the first to experience the future of AI-powered search. Sign up for early access and exclusive updates.
            </p>
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-32 py-4 rounded-full bg-dark-300/50 backdrop-blur-sm border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,122,255,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all"
                >
                  Join Now
                </motion.button>
              </div>
            </form>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center justify-center text-green-400"
                >
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  <span>Thank you for joining the waitlist!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-300/90 backdrop-blur-sm py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Intuitrix</h3>
              <p className="text-gray-400 max-w-sm">
                Transforming search capabilities with advanced AI technology. Making information retrieval intuitive and efficient.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Intuitrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,122,255,0.3)" }}
    className="p-6 rounded-xl bg-dark-300/50 backdrop-blur-sm hover:bg-dark-100/50 transition-all duration-300"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-dark-300/30 backdrop-blur-sm"
  >
    <div className="text-4xl font-bold text-primary mb-2">{number}</div>
    <div className="text-gray-400">{label}</div>
  </motion.div>
); 