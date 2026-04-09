import React from 'react';
import { motion } from 'framer-motion';

const ProjectQR = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label text-xs text-primary uppercase tracking-[0.3em]">AI & Low-Code</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold">QR Code AI Chatbot</h1>
            </div>

            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Bridging the gap between physical products and digital intelligence. This project transforms 
              standard QR codes into interactive LLM gateways.
            </p>

            <div className="p-8 bg-surface-container-high rounded-3xl border border-outline-variant/10 space-y-6">
              <h3 className="font-headline text-xl font-bold">Project Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-primary font-headline">98%</div>
                  <div className="text-xs font-label uppercase text-on-surface-variant">Query Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-primary font-headline">&lt;400ms</div>
                  <div className="text-xs font-label uppercase text-on-surface-variant">Response Latency</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-xl font-bold">The Stack</h3>
              <div className="flex flex-wrap gap-3">
                {["GPT-4o", "Supabase", "Vercel", "Tailwind", "React"].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/10 font-label text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-surface-container-highest rounded-3xl border border-outline-variant/10 flex items-center justify-center p-12 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="material-symbols-outlined text-9xl text-primary opacity-20">smart_toy</span>
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-xl">
               <div className="text-sm font-label uppercase tracking-widest text-primary mb-2">Live Status</div>
               <div className="font-headline font-bold text-lg text-white">Production Ready Interface</div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectQR;
