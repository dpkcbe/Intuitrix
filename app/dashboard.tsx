'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, MagnifyingGlassIcon, PhotoIcon, CodeBracketIcon, ShieldExclamationIcon, GlobeAltIcon, DocumentTextIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

// Simulated real-time data
const initialData = [
  { name: 'Vector Search', value: 120 },
  { name: 'Image Search', value: 90 },
  { name: 'SVG Search', value: 60 },
  { name: 'NSFW Classifier', value: 30 },
  { name: 'Audio Search', value: 20 },
  { name: 'Document Summarizer', value: 15 },
  { name: 'Multilingual Search', value: 10 },
];

const features = [
  {
    icon: <MagnifyingGlassIcon className="h-7 w-7 text-primary" />,
    title: "Vector Search",
    desc: "Lightning-fast, AI-powered vector search for all your data."
  },
  {
    icon: <PhotoIcon className="h-7 w-7 text-primary" />,
    title: "Image Search",
    desc: "Semantic image search that understands context and content."
  },
  {
    icon: <CodeBracketIcon className="h-7 w-7 text-primary" />,
    title: "SVG Search",
    desc: "Intelligent vector graphics search for your design assets."
  },
  {
    icon: <ShieldExclamationIcon className="h-7 w-7 text-primary" />,
    title: "NSFW Classifier",
    desc: "Detect and filter NSFW content in images, text, or any data."
  },
  {
    icon: <MicrophoneIcon className="h-7 w-7 text-primary" />,
    title: "Audio Search",
    desc: "Search and analyze audio content using AI-powered speech recognition."
  },
  {
    icon: <DocumentTextIcon className="h-7 w-7 text-primary" />,
    title: "Document Summarizer",
    desc: "Get instant summaries of long documents and articles."
  },
  {
    icon: <GlobeAltIcon className="h-7 w-7 text-primary" />,
    title: "Multilingual Search",
    desc: "Search across multiple languages seamlessly."
  },
];

export default function Dashboard() {
  const [data, setData] = useState(initialData);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(d =>
        d.map(item => ({
          ...item,
          value: Math.max(5, item.value + Math.round((Math.random() - 0.5) * 10))
        }))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-8 animate-color-change"
        >
          Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-300 mb-10"
        >
          Track your searches, see analytics, and monitor your most searched results in real time.
        </motion.p>

        {/* Real-time Bar Chart */}
        <div className="bg-dark-300/60 rounded-xl p-8 mb-12 border border-gray-800 shadow-neon-soft">
          <div className="flex items-center mb-6">
            <ChartBarIcon className="h-7 w-7 text-primary mr-2" />
            <span className="text-xl font-semibold">Most Searched Features</span>
          </div>
          <div className="w-full flex flex-col gap-4">
            {data.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ width: 0, opacity: 0.5 }}
                animate={{ width: `${Math.min(item.value, 100)}%`, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex items-center"
              >
                <span className="w-44 text-gray-200 text-sm">{item.name}</span>
                <div className="flex-1 mx-3 h-5 rounded-full bg-gray-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(item.value, 100)}%` }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <span className="text-primary font-mono text-xs">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold mb-6"
          >
            All Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-200/80 border border-gray-800 rounded-xl p-6 shadow-neon-soft flex flex-col gap-2"
              >
                <div>{f.icon}</div>
                <div className="text-lg font-semibold text-primary">{f.title}</div>
                <div className="text-gray-300 text-sm">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simulated Analytics Section */}
        <div className="bg-dark-300/60 rounded-xl p-8 border border-gray-800 shadow-neon-soft">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl font-bold mb-4"
          >
            Analytics & Search History
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-gray-400 mb-2">Recent Searches</div>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>"AI-powered vector search"</li>
                <li>"NSFW image detection"</li>
                <li>"SVG logo assets"</li>
                <li>"Audio file search"</li>
                <li>"Document summarizer"</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="text-gray-400 mb-2">Top Results</div>
              <ul className="list-decimal list-inside text-gray-200 space-y-1">
                <li>Vector Search</li>
                <li>Image Search</li>
                <li>NSFW Classifier</li>
                <li>Document Summarizer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 