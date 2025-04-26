'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCallback, useState, useRef, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import customers from '../public/Assets/searchResults.json'

import {
  MagnifyingGlassIcon,
  PhotoIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  SparklesIcon,
  BoltIcon,
  CubeTransparentIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';

// Helper to highlight search term in a string
function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'ig');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="text-primary font-semibold">{part}</span>
    ) : (
      part
    )
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [customerSearch, setCustomerSearch] = useState('');
  const [searchTime, setSearchTime] = useState<number | null>(null);
  const [showTime, setShowTime] = useState(false);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Calculate filteredCustomers and time taken
  useEffect(() => {
    if (customerSearch) {
      const start = performance.now();
      // Filtering logic
      customers.filter(
        c =>
          c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
          c.industry.toLowerCase().includes(customerSearch.toLowerCase())
      );
      const end = performance.now();
      setSearchTime(end - start);
      setShowTime(true);
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
      searchTimeout.current = setTimeout(() => setShowTime(false), 1500);
    } else {
      setSearchTime(null);
      setShowTime(false);
    }
    // eslint-disable-next-line
  }, [customerSearch]);

  function getFilteredCustomers() {
    return customers.filter(
      c =>
        c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
        c.industry.toLowerCase().includes(customerSearch.toLowerCase())
    );
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Search Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        
        {/* Search Grid */}
        <div className="search-grid"></div>
        
        {/* Search Animation Container */}
        <div className="search-animation-container">
          {/* Search Lines */}
          <div className="search-line search-line-1"></div>
          <div className="search-line search-line-2"></div>
          <div className="search-line search-line-3"></div>
          <div className="search-line search-line-4"></div>
          <div className="search-line search-line-5"></div>
          
          {/* Search Nodes */}
          <div className="search-node search-node-1"></div>
          <div className="search-node search-node-2"></div>
          <div className="search-node search-node-3"></div>
          <div className="search-node search-node-4"></div>
          <div className="search-node search-node-5"></div>
          
          {/* Search Pulse Rings */}
          <div className="search-pulse search-pulse-1"></div>
          <div className="search-pulse search-pulse-2"></div>
          <div className="search-pulse search-pulse-3"></div>
          <div className="search-pulse search-pulse-4"></div>
          <div className="search-pulse search-pulse-5"></div>
          
          {/* Data Streams */}
          <div className="data-stream data-stream-1"></div>
          <div className="data-stream data-stream-2"></div>
          <div className="data-stream data-stream-3"></div>
          <div className="data-stream data-stream-4"></div>
          <div className="data-stream data-stream-5"></div>
          
          {/* Search Highlights */}
          <div className="search-highlight search-highlight-1"></div>
          <div className="search-highlight search-highlight-2"></div>
        </div>
      </div>
      
      {/* Background Particles with increased opacity */}
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
              value: "#E31837",
            },
            links: {
              color: "#E31837",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 0.8,
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
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Real-time Theme Elements with increased visibility */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Real-time data streams */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
                animation: `slide-right ${3 + i % 5}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Real-time nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(227,24,55,0.7)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        
        {/* Real-time connections */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`connection-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `fade-in-out ${4 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Hero Section with Google-like Customer Search */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/10 to-black"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-color-change">
                Intuitrix
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto"
            >
              Elevate your search experience with <span className="text-red-500 font-semibold">AI-powered Search</span> solutions
            </motion.p>
            {/* Google-like Customer Search */}
            <div className="flex flex-col items-center mt-12">
              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  value={customerSearch}
                  onChange={e => setCustomerSearch(e.target.value)}
                  placeholder="Search customers..."
                  className="w-full px-6 py-4 rounded-full bg-gray-900/80 border border-gray-800 focus:border-primary/70 focus:ring-2 focus:ring-primary/30 outline-none text-white text-lg shadow-lg transition-all"
                  style={{ boxShadow: '0 2px 24px 0 rgba(0,0,0,0.15)' }}
                />
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {/* Animated Results */}
              <AnimatePresence>
                {customerSearch && (
                  <motion.div
                    key="search-results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="w-full max-w-2xl mt-2 bg-black/95 rounded-xl shadow-lg border border-gray-800 divide-y divide-gray-800 text-left overflow-hidden relative"
                  >
                    {/* Time badge */}
                    <AnimatePresence>
                      {showTime && searchTime !== null && (
                        <motion.div
                          key="search-time"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute right-4 top-6 bg-gray-900/80 text-green-400 px-4 py-1 rounded-full text-xs font-semibold shadow-neon-soft z-10 flex items-center gap-1"
                          style={{
                            backdropFilter: 'blur(6px)',
                            border: '1px solid #22c55e', // Tailwind green-500
                            letterSpacing: '0.03em'
                          }}
                        >
                          <span>Time taken:</span>
                          <span className="font-mono">
                            {searchTime < 1
                              ? `${searchTime.toFixed(3)}s`
                              : `${(searchTime / 1000).toFixed(3)}s`}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {getFilteredCustomers().length > 0 ? (
                      getFilteredCustomers().map((c, i) => (
                        <motion.div
                          key={c.name + i}
                          whileHover={{ backgroundColor: "rgba(30,30,30,0.7)" }}
                          className="px-6 py-4 cursor-pointer transition-colors"
                        >
                          <div className="font-medium text-white">
                            {highlightMatch(c.name, customerSearch)}
                          </div>
                          <div className="text-sm text-gray-400">
                            {highlightMatch(c.industry, customerSearch)}
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="px-6 py-4 text-gray-400">No customers found.</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group px-8 py-4 bg-red-600 text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-neon-soft relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <SparklesIcon className="w-5 h-5 ml-2 opacity-75" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="px-8 py-4 bg-transparent text-white/90 rounded-full text-lg font-semibold border-2 border-red-500/50 hover:border-red-500 hover:shadow-neon-soft transition-all duration-300 flex items-center"
              >
                Request Demo
                <BoltIcon className="w-5 h-5 ml-2 opacity-75" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-20 bg-black/80 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Powered by Advanced Technology
            </h2>
            <p className="text-gray-300/80 max-w-3xl mx-auto text-lg">
              Our cutting-edge AI technology revolutionizes search capabilities across all data types
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TechCard
              title="Vector Search Excellence"
              description="Transform unstructured data into meaningful vectors for lightning-fast similarity search. Perfect for recommendation systems and content discovery."
              delay={0.2}
            />
            <TechCard
              title="Semantic Understanding"
              description="Advanced natural language processing enables context-aware search results, understanding user intent beyond keywords."
              delay={0.3}
            />
            <TechCard
              title="Multi-Modal Search"
              description="Seamlessly search across text, images, and SVGs with our unified search architecture. Perfect for design assets and mixed content repositories."
              delay={0.4}
            />
            <TechCard
              title="Real-time Processing"
              description="Lightning-fast indexing and search capabilities ensure your content is searchable instantly, with minimal latency."
              delay={0.5}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" ref={ref} className="py-20 bg-black/90 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <FeatureCard
              icon={<MagnifyingGlassIcon className="h-8 w-8 text-primary/80" />}
              title="Vector Search"
              description="Transform your search capabilities with our advanced vector search technology"
              isActive={activeFeature === 0}
              onClick={() => setActiveFeature(activeFeature === 0 ? null : 0)}
            />
            <FeatureCard
              icon={<PhotoIcon className="h-8 w-8 text-primary/80" />}
              title="Image Search"
              description="Powerful semantic image search that understands context and content"
              isActive={activeFeature === 1}
              onClick={() => setActiveFeature(activeFeature === 1 ? null : 1)}
            />
            <FeatureCard
              icon={<CodeBracketIcon className="h-8 w-8 text-primary/80" />}
              title="SVG Search"
              description="Intelligent vector graphics search for your design assets"
              isActive={activeFeature === 2}
              onClick={() => setActiveFeature(activeFeature === 2 ? null : 2)}
            />
            {/* NSFW Classifier Product */}
            <FeatureCard
              icon={<ShieldExclamationIcon className="h-8 w-8 text-primary/80" />}
              title="NSFW Classifier"
              description="Detect and filter NSFW (Not Safe For Work) content in images, text, or any data. Help your company stay compliant and safe with our AI-powered classifier."
              isActive={activeFeature === 3}
              onClick={() => setActiveFeature(activeFeature === 3 ? null : 3)}
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Tech Lines Background */}
      <div className="py-20 bg-black/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
                animation: `slide-right ${2 + i % 3}s linear infinite`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="99.9%" label="Accuracy" />
            <StatCard number="50ms" label="Average Response Time" />
            <StatCard number="1M+" label="Searches Per Day" />
          </div>
        </div>
      </div>

      {/* Simplified Waitlist Section */}
      <div ref={waitlistRef} className="py-20 bg-black/80 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Join the Waitlist
            </h2>
            <p className="text-gray-300/80 mb-8">
              Be among the first to experience the future of AI-powered search.
            </p>
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="relative group">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400/80 group-hover:text-primary/80 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-32 py-4 rounded-full bg-gray-900/30 border border-gray-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary/70 text-white rounded-full font-medium hover:bg-primary/90 transition-all flex items-center"
                >
                  Join Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer with Animated Border */}
      <footer className="bg-black/90 py-12 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Intuitrix
              </h3>
              <p className="text-gray-400 max-w-sm">
                Transforming search capabilities with advanced AI technology. Making information retrieval intuitive and efficient.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Features', 'Documentation', 'Contact'].map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-primary/80 transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {['Twitter', 'LinkedIn', 'GitHub'].map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-primary/80 transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
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

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  isActive,
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    onClick={onClick}
    className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 group cursor-pointer
      ${isActive 
        ? 'bg-dark-200/80 border-primary shadow-neon-soft scale-105' 
        : 'bg-dark-300/50 hover:bg-dark-200/50 border-gray-800 hover:border-primary'
      } border`}
  >
    <div className={`mb-4 transition-colors ${isActive ? 'text-accent' : 'group-hover:text-accent'}`}>
      {icon}
    </div>
    <h3 className={`text-xl font-semibold mb-2 transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: isActive ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="mt-4 origin-top"
    >
      <p className="text-sm text-gray-300">
        Click to {isActive ? 'collapse' : 'expand'} more details about this feature.
      </p>
    </motion.div>
  </motion.div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-xl bg-dark-300/30 backdrop-blur-sm hover:shadow-neon-soft transition-all duration-300 border border-gray-800 hover:border-primary group"
  >
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="text-4xl font-bold text-primary mb-2 transition-colors group-hover:text-accent"
    >
      {number}
    </motion.div>
    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{label}</div>
  </motion.div>
);

const TechCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="p-6 rounded-xl bg-gray-900/20 border border-gray-800/30 hover:border-primary/30 transition-all duration-300 group"
  >
    <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-primary/80 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400/80">
      {description}
    </p>
  </motion.div>
); 