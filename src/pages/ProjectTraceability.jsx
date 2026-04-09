import React from 'react';
import { motion } from 'framer-motion';

const ProjectTraceability = () => {
  return (
    <div className="min-h-screen">
      <nav className="glass-panel px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
        <a href="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2">
           <span className="material-symbols-outlined text-lg">west</span>
           Back to Works
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center max-w-3xl mx-auto"
          >
            <span className="font-label text-xs text-primary-dim uppercase tracking-[0.4em]">Analytics Mastery</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-tight">Traceability Dashboard</h1>
            <p className="font-body text-xl text-on-surface-variant">
              Turning supply chain complexity into operational clarity with advanced DAX and SQL integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsBox value="14%" label="Lead Time Reduction" icon="speed" />
            <StatsBox value="99.2%" label="Data Accuracy" icon="check_circle" />
            <StatsBox value="12" label="Unified Sources" icon="hub" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
             <div className="glass-panel p-10 rounded-3xl border border-outline-variant/10 space-y-6">
                <h3 className="font-headline text-2xl font-bold">The Problem</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  The client faced disconnected data silos across multiple SQL servers, leading to delayed 
                  reporting and inaccurate lead time forecasts. There was zero visibility into 
                  micro-level production bottlenecks.
                </p>
             </div>
             <div className="bg-primary-dim/10 p-10 rounded-3xl border border-primary-dim/20 space-y-6">
                <h3 className="font-headline text-2xl font-bold text-primary">The Solution</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Built a unified Power BI model utilizing DirectQuery and Import mode mix to balance 
                  real-time visibility with processing performance. Implemented complex DAX filters 
                  for dynamic traceability.
                </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatsBox = ({ value, label, icon }) => (
  <div className="p-8 bg-surface-container-high rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center space-y-4">
    <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
    <div className="text-4xl font-extrabold font-headline">{value}</div>
    <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{label}</div>
  </div>
);

export default ProjectTraceability;
