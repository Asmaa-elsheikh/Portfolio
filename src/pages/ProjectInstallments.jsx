import React from 'react';
import { motion } from 'framer-motion';

const ProjectInstallments = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-panel px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
        <a href="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
           <span className="material-symbols-outlined text-lg">west</span>
           Back to Works
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label text-xs text-primary uppercase tracking-[0.3em]">FinTech SaaS</span>
              <h1 className="font-headline text-4xl md:text-7xl font-extrabold leading-[1.1]">Installments</h1>
            </div>

            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Empowering business owners with Natural Language Processing. Simply write a sentence about a payment plan, and AI handles the logic, math, and customer scheduling.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://installs-nine.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-primary text-white font-label text-xs uppercase tracking-widest font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
                View Live Demo
              </a>
              <div className="px-6 py-3 rounded-full bg-surface-container-high border border-outline-variant/10 text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                Status: Live SaaS
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="font-headline text-2xl font-bold italic border-l-4 border-primary pl-4">Financial Intelligence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechItem icon="auto_awesome" title="Sentence Parsing" desc="NLP models translate plain text into complex financial schedules." />
                <TechItem icon="calculate" title="Math Engine" desc="Automated amortization and interest rate calculations." />
                <TechItem icon="group" title="CRM Portal" desc="Comprehensive dashboard for tracking customer loan health." />
                <TechItem icon="security" title="Data Integrity" desc="Secure encryption for all financial records and user data." />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-[2rem] border border-outline-variant/20 overflow-hidden flex flex-col items-center justify-center p-12 text-center gap-8 group">
               <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse -z-10" />
                  <span className="material-symbols-outlined text-9xl text-primary drop-shadow-[0_0_20px_rgba(226,22,95,0.4)] group-hover:rotate-12 transition-transform duration-700">receipt_long</span>
               </div>
               
               <div className="space-y-4 relative w-full">
                 <div className="px-4 py-3 bg-background/80 backdrop-blur border border-outline-variant/20 rounded-xl font-body text-sm italic text-on-surface-variant shadow-2xl">
                   "Collect $200 weekly for 12 weeks..."
                 </div>
                 
                 {/* Floating animated data chips */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 3 }}
                   className="absolute -top-12 -right-4 px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-label text-primary border border-primary/20 shadow-xl"
                 >
                   $2,400 Total
                 </motion.div>
                 
                 <div className="space-y-2">
                   <h3 className="font-headline text-3xl font-bold italic">Speak Finance</h3>
                   <p className="font-body text-on-surface-variant max-w-xs mx-auto">
                     A conversation-first UI that eliminates manual bank-style data entry.
                   </p>
                 </div>
               </div>

               {/* Decorative Financial Growth Bars */}
               <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end gap-2 px-8 opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: [`${10 + i * 5}%`, `${20 + i * 6}%`, `${10 + i * 5}%`] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                      className="flex-1 bg-primary rounded-t-lg"
                    />
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

        {/* Narrative Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-20">
           <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-outline-variant/10 space-y-6">
              <h3 className="font-headline text-2xl font-bold">The Problem</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-lg font-light">
                Managing recurring payments is a major administrative burden for SMEs. Manual scheduling leads to errors, missed payments, and wasted time translating verbal customer agreements into digital records.
              </p>
           </div>
           <div className="bg-primary/5 p-6 sm:p-10 rounded-3xl border border-primary/10 space-y-6">
              <h3 className="font-headline text-2xl font-bold text-primary">The Solution</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-lg font-light">
                Installments utilizes specialized NLP models to bridge the gap between human language and financial logic. By reducing "Intent-to-Record" time, we've enabled business owners to manage 3x more customers with zero additional overhead.
              </p>
           </div>
        </div>
      </main>
    </div>
  );
};

const TechItem = ({ icon, title, desc }) => (
  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
    <div className="flex items-center gap-2 text-primary mb-2">
      <span className="material-symbols-outlined text-xl">{icon}</span>
      <span className="font-label text-[10px] uppercase font-bold tracking-widest">{title}</span>
    </div>
    <p className="text-xs text-on-surface-variant leading-relaxed font-body">{desc}</p>
  </div>
);

export default ProjectInstallments;
