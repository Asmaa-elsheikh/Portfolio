import React from 'react';
import { motion } from 'framer-motion';

const ProjectElectronicsRating = () => {
  return (
    <div className="min-h-screen">
      <nav className="glass-panel px-6 py-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
          <a 
            href="https://github.com/Asmaa-elsheikh/Electronics-Product-RATING" 
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center max-w-3xl mx-auto"
          >
            <span className="font-label text-xs text-primary-dim uppercase tracking-[0.4em]">Analytics Mastery</span>
            <h1 className="font-headline text-4xl md:text-7xl font-extrabold leading-tight">Electronics Product Rating</h1>
            <p className="font-body text-xl text-on-surface-variant">
              Centralizing 7.2K+ consumer reviews to uncover sentiment and brand performance across 38 manufacturers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <StatsBox value="7,299" label="Total Reviews" icon="forum" />
            <StatsBox value="4.37" label="Avg Rating" icon="star" />
            <StatsBox value="38" label="Total Brands" icon="category" />
            <StatsBox value="4,341" label="Helpful Reviews" icon="thumb_up" />
          </div>

          <div className="mt-8 glass-panel p-4 md:p-8 rounded-3xl border border-outline-variant/10 overflow-hidden">
             {/* We use a generic image placeholder for now. Please copy your image to src/assets/ and reference it */}
             <div className="aspect-video relative rounded-2xl overflow-hidden bg-surface-container-highest border border-outline-variant/20 flex flex-col items-center justify-center">
                 <p className="text-on-surface-variant mb-4 font-label text-xs uppercase tracking-widest">Dashboard Preview</p>
                 <img src="/electronics-dashboard.png" alt="Electronics Product Rating Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-90"
                 onError={(e) => {
                     e.target.style.display='none';
                     e.target.nextSibling.style.display='flex';
                 }} />
                 <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center gap-4">
                     <span className="material-symbols-outlined text-4xl text-primary-dim">image</span>
                     <p className="font-body text-sm text-on-surface-variant">
                        Image placeholder. To display your dashboard, save your image as <code className="bg-background px-1 py-0.5 rounded text-primary">electronics-dashboard.png</code> in the <code className="bg-background px-1 py-0.5 rounded text-primary">public</code> directory of your project.
                     </p>
                 </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8">
             <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-outline-variant/10 space-y-6">
                <h3 className="font-headline text-2xl font-bold">The Problem</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Understanding consumer sentiment across thousands of electronics products and multiple manufacturers was challenging due to scattered review data. There was no centralized way to correlate average ratings with helpfulness scores, track recommended vs. not-recommended brand metrics, and monitor category distribution over the years (2007-2018).
                </p>
             </div>
             <div className="bg-primary-dim/10 p-6 sm:p-10 rounded-3xl border border-primary-dim/20 space-y-6">
                <h3 className="font-headline text-2xl font-bold text-primary">The Solution</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Created an interactive Power BI dashboard that aggregates and analyzes over 7,200 product reviews. This comprehensive BI solution reveals top brands by helpful reviews, compares recommendation counts, tracks total reviews by category (e.g., Computer Accessories and Mobile Accessories), and displays a detailed yearly breakdown, unlocking actionable data for product teams.
                </p>
             </div>
          </div>

          <div className="py-12 text-center">
            <a 
              href="https://github.com/Asmaa-elsheikh/Electronics-Product-RATING" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-surface-container-high border border-outline-variant/20 hover:border-primary/50 transition-all group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">terminal</span>
              <div className="text-left">
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">View Source</div>
                <div className="font-headline font-bold">Explore Repository</div>
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
  <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center space-y-4">
    <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
    <div className="text-3xl font-extrabold font-headline">{value}</div>
    <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">{label}</div>
  </div>
);

export default ProjectElectronicsRating;
