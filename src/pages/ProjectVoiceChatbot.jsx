import React from 'react';
import { motion } from 'framer-motion';

const ProjectVoiceChatbot = () => {
  return (
    <div className="min-h-screen">
      <nav className="glass-panel px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-headline font-extrabold text-xl tracking-tight">Asmaa Ali</a>
        <a href="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
           <span className="material-symbols-outlined text-lg">west</span>
           Back to Works
        </a>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-label text-xs text-primary uppercase tracking-[0.3em]">AI Suite</span>
              <h1 className="font-headline text-4xl md:text-7xl font-extrabold leading-[1.1]">Voice AI Chatbot</h1>
            </div>

            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              Breaking the barrier of text interfaces. This project creates a hands-free, high-performance voice interaction system using state-of-the-art speech models.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://voice-ai-chatbot.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-primary text-white font-label text-xs uppercase tracking-widest font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
                View Live Demo
              </a>
              <div className="px-6 py-3 rounded-full bg-surface-container-high border border-outline-variant/10 text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                Status: Live
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="font-headline text-2xl font-bold italic border-l-4 border-primary pl-4">Core Technology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechItem icon="mic" title="Speech Processing" desc="Optimized Whisper models for low-latency STT." />
                <TechItem icon="record_voice_over" title="Neural TTS" desc="Realistic voice synthesis with emotional tone." />
                <TechItem icon="psychology" title="Context Memory" desc="Maintaining state across long voice sessions." />
                <TechItem icon="database" title="Supabase" desc="Secure and scalable vector storage for conversation history." />
                <TechItem icon="bolt" title="Lovable Platform" desc="Rapid prototyping and robust deployment via Lovable." />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Abstract Visual Representation */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] border border-outline-variant/20 overflow-hidden flex flex-col items-center justify-center p-12 text-center gap-8 group">
               <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse -z-10" />
                  <span className="material-symbols-outlined text-9xl text-primary drop-shadow-[0_0_20px_rgba(226,22,95,0.4)] group-hover:scale-110 transition-transform duration-700">graphic_eq</span>
               </div>
               <div className="space-y-2">
                 <h3 className="font-headline text-3xl font-bold">Listen & Adapt</h3>
                 <p className="font-body text-on-surface-variant max-w-xs mx-auto">
                   A sophisticated voice-first UI designed for accessibility and natural data query flows.
                 </p>
               </div>
               {/* Decorative Waves */}
               <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-1 px-4 opacity-30">
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                      transition={{ repeat: Infinity, duration: 1 + Math.random(), delay: i * 0.1 }}
                      className="flex-1 bg-primary rounded-t-full"
                    />
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

const TechItem = ({ icon, title, desc }) => (
  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/5">
    <div className="flex items-center gap-2 text-primary mb-2">
      <span className="material-symbols-outlined text-xl">{icon}</span>
      <span className="font-label text-[10px] uppercase font-bold tracking-widest">{title}</span>
    </div>
    <p className="text-xs text-on-surface-variant leading-relaxed font-body">{desc}</p>
  </div>
);

export default ProjectVoiceChatbot;
