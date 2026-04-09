import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectListAI = () => {
  const projects = [
    {
      title: "Voice AI Chatbot",
      description: "Interactive voice-to-voice interface for seamless real-time conversations using OpenAI's STT/TTS capabilities.",
      link: "/projects/voice-chatbot",
      tags: ["OpenAI", "Lovable", "Supabase"]
    },
    {
      title: "Installments SaaS",
      description: "A smart financial tool where users can describe payment plans in plain English and AI handles the math and scheduling.",
      link: "/projects/installments",
      tags: ["NLP", "Financial AI", "Next.js"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen">
      <nav className="glass-panel px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-headline font-extrabold text-xl tracking-tight text-on-background">Asmaa Ali</Link>
        <Link to="/" className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2">
           <span className="material-symbols-outlined text-lg">west</span>
           Back Home
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4 mb-12 text-center">
          <span className="font-label text-xs text-primary uppercase tracking-[0.4em]">Advanced Workflows</span>
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold">AI & Low-Code Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link key={i} to={project.link}>
              <div className="bg-surface-container-lowest p-1 rounded-2xl border border-outline-variant/10 hover:shadow-[0_0_40px_rgba(226,22,95,0.1)] transition-all h-full group">
                <div className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
                    <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-highest/50 rounded text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectListAI;
