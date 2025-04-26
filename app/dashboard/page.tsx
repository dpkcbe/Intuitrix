'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon,
  ChartPieIcon,
  ArrowPathIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  CodeBracketIcon,
  ShieldExclamationIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ClockIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

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
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-primary" />,
    title: "Vector Search",
    desc: "AI-powered vector search.",
  },
  {
    icon: <PhotoIcon className="h-5 w-5 text-primary" />,
    title: "Image Search",
    desc: "Semantic image search.",
  },
  {
    icon: <CodeBracketIcon className="h-5 w-5 text-primary" />,
    title: "SVG Search",
    desc: "Vector graphics search.",
  },
  {
    icon: <ShieldExclamationIcon className="h-5 w-5 text-primary" />,
    title: "NSFW Classifier",
    desc: "Detect NSFW content.",
  },
  {
    icon: <MicrophoneIcon className="h-5 w-5 text-primary" />,
    title: "Audio Search",
    desc: "Audio content search.",
  },
  {
    icon: <DocumentTextIcon className="h-5 w-5 text-primary" />,
    title: "Doc Summarizer",
    desc: "Instant summaries.",
  },
  {
    icon: <GlobeAltIcon className="h-5 w-5 text-primary" />,
    title: "Multilingual",
    desc: "Search in any language.",
  },
];

// Simulated stats
const stats = [
  {
    icon: <ArrowTrendingUpIcon className="h-5 w-5 text-primary" />,
    label: "Total Searches",
    value: "1,234,567",
  },
  {
    icon: <UserGroupIcon className="h-5 w-5 text-primary" />,
    label: "Active Users",
    value: "8,900",
  },
  {
    icon: <ClockIcon className="h-5 w-5 text-primary" />,
    label: "Avg. Response",
    value: "42ms",
  },
];

// Simulated recent activity
const recentActivity = [
  { user: "Alice", action: "Searched 'AI vector search'", time: "2m ago" },
  { user: "Bob", action: "Used NSFW Classifier", time: "5m ago" },
  { user: "Carol", action: "Summarized a doc", time: "10m ago" },
  { user: "Dave", action: "Searched 'SVG logo'", time: "15m ago" },
];

// Sidebar analytics nav options
const analyticsNav = [
  { key: 'home', label: 'Home', icon: <HomeIcon className="h-6 w-6" />, href: '/' },
  { key: 'stats', label: 'Stats', icon: <ArrowTrendingUpIcon className="h-6 w-6" /> },
  { key: 'bar', label: 'Bar Chart', icon: <ChartBarIcon className="h-6 w-6" /> },
  { key: 'pie', label: 'Pie Chart', icon: <ChartPieIcon className="h-6 w-6" /> },
  { key: 'features', label: 'Features', icon: <DocumentTextIcon className="h-6 w-6" /> },
  { key: 'activity', label: 'Recent Activity', icon: <ArrowPathIcon className="h-6 w-6" /> },
];

export default function Dashboard() {
  const [data, setData] = useState(initialData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState('stats');

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

  // Pie chart data
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const pieData = data.map(d => ({
    ...d,
    percent: total ? (d.value / total) * 100 : 0,
  }));
  const pieColors = [
    "#E31837", "#FF3850", "#2A2A2A", "#F59E42", "#3B82F6", "#10B981", "#A21CAF"
  ];

  // Analytics blocks
  const blocks = {
    stats: (
      <motion.div
        key="stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="flex gap-4 justify-center items-center h-full"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-dark-200/80 border border-gray-800 rounded-xl p-6 shadow-neon-soft flex-1 flex flex-col items-center min-w-[120px] justify-center"
          >
            {stat.icon}
            <div className="text-2xl font-bold mt-2 text-primary">{stat.value}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    ),
    bar: (
      <motion.div
        key="bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-dark-300/60 rounded-xl p-8 border border-gray-800 shadow-neon-soft flex flex-col justify-center h-full"
      >
        <div className="flex items-center mb-6">
          <ChartBarIcon className="h-7 w-7 text-primary mr-2" />
          <span className="text-xl font-semibold">Most Searched Features</span>
        </div>
        <div className="w-full flex flex-col gap-4">
          {data.map((item, i) => (
            <div key={item.name} className="flex items-center">
              <span className="w-44 text-gray-200 text-sm">{item.name}</span>
              <div className="flex-1 mx-3 h-5 rounded-full bg-gray-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(item.value, 100)}%` }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="h-full"
                  style={{
                    background: `linear-gradient(90deg, ${pieColors[i % pieColors.length]}, #fff2 80%)`
                  }}
                />
              </div>
              <span className="text-primary font-mono text-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ),
    pie: (
      <motion.div
        key="pie"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-dark-300/60 rounded-xl p-8 border border-gray-800 shadow-neon-soft flex flex-col items-center justify-center h-full"
      >
        <div className="flex items-center mb-6">
          <ChartPieIcon className="h-7 w-7 text-primary mr-2" />
          <span className="text-xl font-semibold">Feature Usage Distribution</span>
        </div>
        <svg width="180" height="180" viewBox="0 0 180 180">
          <g transform="translate(90,90)">
            {pieData.reduce((acc, d, i) => {
              const [startAngle, paths] = acc;
              const angle = (d.percent / 100) * 2 * Math.PI;
              const endAngle = startAngle + angle;
              const x1 = 80 * Math.cos(startAngle - Math.PI / 2);
              const y1 = 80 * Math.sin(startAngle - Math.PI / 2);
              const x2 = 80 * Math.cos(endAngle - Math.PI / 2);
              const y2 = 80 * Math.sin(endAngle - Math.PI / 2);
              const largeArc = angle > Math.PI ? 1 : 0;
              const pathData = `
                M 0 0
                L ${x1} ${y1}
                A 80 80 0 ${largeArc} 1 ${x2} ${y2}
                Z
              `;
              paths.push(
                <motion.path
                  key={d.name}
                  d={pathData}
                  fill={pieColors[i % pieColors.length]}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  style={{ originX: 0, originY: 0 }}
                  opacity={0.9}
                />
              );
              return [endAngle, paths];
            }, [0, [] as JSX.Element[]])[1]}
          </g>
        </svg>
        <div className="mt-4 flex flex-col gap-1">
          {pieData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: pieColors[i % pieColors.length] }} />
              <span className="text-sm text-gray-200">{d.name}</span>
              <span className="text-xs text-gray-400">{d.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    ),
    features: (
      <motion.div
        key="features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-dark-300/60 rounded-xl p-8 border border-gray-800 shadow-neon-soft flex flex-col justify-center h-full"
      >
        <div className="flex items-center mb-6">
          <DocumentTextIcon className="h-7 w-7 text-primary mr-2" />
          <span className="text-xl font-semibold">All Features</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="flex items-center gap-3 bg-dark-200/80 border border-gray-800 rounded-lg p-3"
            >
              {f.icon}
              <div>
                <div className="text-base font-semibold text-primary">{f.title}</div>
                <div className="text-gray-300 text-xs">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ),
    activity: (
      <motion.div
        key="activity"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-dark-300/60 rounded-xl p-8 border border-gray-800 shadow-neon-soft flex flex-col justify-center h-full"
      >
        <div className="flex items-center mb-6">
          <ArrowPathIcon className="h-7 w-7 text-primary mr-2" />
          <span className="text-xl font-semibold">Recent Activity</span>
        </div>
        <ul className="divide-y divide-gray-800">
          {recentActivity.map((a, i) => (
            <li
              key={a.user + i}
              className="py-3 flex items-center gap-3"
            >
              <span className="text-primary font-semibold">{a.user}</span>
              <span className="text-gray-300">{a.action}</span>
              <span className="ml-auto text-xs text-gray-400">{a.time}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-dark-300/80 border-r border-gray-800 min-h-screen py-8 px-4 shadow-neon-soft z-20">
        <div className="mb-10 flex items-center gap-2">
          <ChartBarIcon className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold animate-color-change">Intuitrix</span>
        </div>
        <nav className="flex flex-col gap-2">
          {analyticsNav.map(link =>
            link.href ? (
              <a
                key={link.key}
                href={link.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-200 hover:bg-primary/20 hover:text-primary transition-all font-medium"
              >
                {link.icon}
                {link.label}
              </a>
            ) : (
              <button
                key={link.key}
                onClick={() => setSelected(link.key)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all
                  ${selected === link.key
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-200 hover:bg-primary/10 hover:text-primary'}
                `}
              >
                {link.icon}
                {link.label}
              </button>
            )
          )}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-0 left-0 z-30">
        <button
          className="m-4 p-2 rounded-full bg-dark-300/80 border border-gray-800"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-7 w-7 text-primary" />
        </button>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-56 bg-dark-300/90 border-r border-gray-800 shadow-neon-soft z-40 flex flex-col py-8 px-4"
          >
            <button
              className="mb-8 self-end p-2 rounded-full bg-dark-200/80 border border-gray-800"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-primary" />
            </button>
            <div className="mb-10 flex items-center gap-2">
              <ChartBarIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold animate-color-change">Intuitrix</span>
            </div>
            <nav className="flex flex-col gap-2">
              {analyticsNav.map(link =>
                link.href ? (
                  <a
                    key={link.key}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-200 hover:bg-primary/20 hover:text-primary transition-all font-medium"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.key}
                    onClick={() => {
                      setSelected(link.key);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all
                      ${selected === link.key
                        ? 'bg-primary/20 text-primary'
                        : 'text-gray-200 hover:bg-primary/10 hover:text-primary'}
                    `}
                  >
                    {link.icon}
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Main Content: Show selected analytics block */}
      <div className="flex-1 flex flex-col justify-center items-center h-screen max-h-screen overflow-hidden">
        <div className="w-full max-w-4xl h-full flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {blocks[selected]}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
} 