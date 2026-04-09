import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      <nav className="glass-panel px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
        <a href="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2">
           <span className="material-symbols-outlined text-lg">west</span>
           Back Home
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-label text-xs text-primary uppercase tracking-[0.3em]">The Vision</span>
            <h1 className="font-headline text-5xl font-extrabold">The Bridge between Tech & Business</h1>
          </div>

          <p className="font-body text-xl text-on-surface-variant leading-relaxed">
            I am an Analytics & AI Product Manager focused on building data-driven systems that scale. 
            My work lives at the intersection of business strategy and high-velocity technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-outline-variant/10">
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold">Strategic Approach</h2>
              <p className="font-body text-on-surface-variant">
                I don't just build dashboards; I build decision-making frameworks. From DAX optimization 
                to LLM fine-tuning, every technical choice is driven by a clear ROI objective.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Product Management", "Data Engineering", "AI Strategy", "ROI Analysis"].map(tag => (
                <div key={tag} className="p-4 bg-surface-container-high rounded-xl border border-outline-variant/20 flex items-center justify-center text-center">
                  <span className="font-label text-xs font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
