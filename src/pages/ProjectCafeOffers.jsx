import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCafeOffers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    { 
      id: 'homepgae', 
      title: 'Operational Overview', 
      name: 'cafe-offers-dashboard-homepgae.png',
      desc: 'High-level summary of cafe performance metrics and overall sales health.'
    },
    { 
      id: 'customers', 
      title: 'Customer Behavior', 
      name: 'cafe-offers-dashboard-customers.png',
      desc: 'Analyzing visit frequency, loyalty segmentation, and demographic patterns.'
    },
    { 
      id: 'offer', 
      title: 'Offer Effectiveness', 
      name: 'cafe-offers-dashboard-offer.png',
      desc: 'Measuring promotional ROI and identifying top-performing campaign strategies.'
    },
    { 
      id: 'insights', 
      title: 'Deep Insights', 
      name: 'cafe-offers-dashboard-insights.png',
      desc: 'Statistical breakdowns and trend analysis for strategic business growth.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-panel px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex gap-8 items-center">
          <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
          <a 
            href="https://github.com/Asmaa-elsheikh/Cafe_Offers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary font-label text-[10px] uppercase tracking-widest transition-colors"
          >
            <span className="material-symbols-outlined text-base">terminal</span>
            GitHub Repo
          </a>
        </div>
        <a href="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
           <span className="material-symbols-outlined text-lg">west</span>
           Back to Works
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center max-w-3xl mx-auto"
          >
            <span className="font-label text-xs text-primary-dim uppercase tracking-[0.4em]">Business Strategy</span>
            <h1 className="font-headline text-4xl md:text-7xl font-extrabold leading-tight">Cafe Offers Analytics</h1>
            <p className="font-body text-xl text-on-surface-variant">
              A comprehensive Power BI suite for optimizing hospitality operations and customer engagement.
            </p>
          </motion.div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsBox value="ROI-Focused" label="Offer Effectiveness" icon="payments" />
            <StatsBox value="75%" label="Loyalty Adoption" icon="person_celebrate" />
            <StatsBox value="24/7" label="Operational Visibility" icon="visibility" />
          </div>

          {/* Interactive Carousel */}
          <section className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="font-headline text-3xl font-bold italic">Dashboard Gallery</h2>
                <p className="font-body text-on-surface-variant">Cycle through the different analytical viewpoints.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                  className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center hover:border-primary transition-all text-on-background"
                >
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button 
                  onClick={() => setActiveSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                  className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center hover:border-primary transition-all text-on-background"
                >
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-video glass-panel rounded-3xl border border-outline-variant/10 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img 
                    src={`/${images[activeSlide].name}`} 
                    alt={images[activeSlide].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-surface-container-highest flex-col items-center justify-center p-12 text-center gap-6">
                    <span className="material-symbols-outlined text-6xl text-primary-dim opacity-30">monitoring</span>
                    <div className="space-y-2">
                      <p className="font-headline text-2xl font-bold">{images[activeSlide].title}</p>
                      <p className="font-body text-on-surface-variant max-w-sm">{images[activeSlide].desc}</p>
                    </div>
                    <p className="font-label text-xs uppercase tracking-widest text-primary-dim border border-primary-dim/30 px-4 py-2 rounded-full">
                       Missing: {images[activeSlide].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel border border-white/10 backdrop-blur-xl rounded-2xl flex justify-between items-center pointer-events-none translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-dim">Viewing Viewpoint {activeSlide + 1} of 4</span>
                  <h3 className="font-headline text-xl font-bold">{images[activeSlide].title}</h3>
                </div>
                <div className="flex gap-1">
                  {images.map((_, i) => (
                    <div key={i} className={`w-8 h-1 rounded-full ${i === activeSlide ? 'bg-primary' : 'bg-white/20'}`} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Narrative sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-4">
             <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-outline-variant/10 space-y-6">
                <h3 className="font-headline text-2xl font-bold">The Problem</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Cafe operations often struggle with promotional blind spots, where offers are distributed without clear tracking of customer segment response. The business lacked a unified view that connected transaction frequency with specific campaign triggers, leading to inefficient marketing spend.
                </p>
             </div>
             <div className="bg-primary-dim/10 p-6 sm:p-10 rounded-3xl border border-primary-dim/20 space-y-6">
                <h3 className="font-headline text-2xl font-bold text-primary">The Solution</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Implemented a multi-page Power BI ecosystem that bridges operational data with customer loyalty metrics. By creating dynamic insights for each business pillar—Operations, Customers, and Offers—the dashboard enables the management to pivot strategies based on real-time ROI and behavioral trends.
                </p>
             </div>
          </div>

          <div className="py-12 text-center">
            <a 
              href="https://github.com/Asmaa-elsheikh/Cafe_Offers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 rounded-full bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 transition-all group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">terminal</span>
              <div className="text-left">
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Source Directory</div>
                <div className="font-headline font-bold text-lg">Explore Project Scope</div>
              </div>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">east</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatsBox = ({ value, label, icon }) => (
  <div className="p-8 bg-surface-container-high rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center space-y-4 hover:shadow-2xl hover:shadow-primary-dim/10 transition-all">
    <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
    <div className="text-4xl font-extrabold font-headline">{value}</div>
    <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{label}</div>
  </div>
);

export default ProjectCafeOffers;
