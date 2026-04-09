import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectListBI = () => {
  const projects = [
    {
      title: "Electronics Product Rating",
      category: "Consumer Electronics Analytics",
      description: "Analyzing 7.2K+ product reviews to uncover sentiment and brand performance across 38 brands.",
      link: "/projects/electronics-rating",
      tags: ["Power BI", "Data Visualization", "Sentiment Analysis"]
    },
    {
      title: "Cafe Offers Analytics",
      category: "Retail & Hospitality",
      description: "A comprehensive view of cafe operations, customer behavior, and offer effectiveness.",
      link: "/projects/cafe-offers",
      tags: ["Power BI", "Data Modeling", "Retail Analytics"]
    }
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
          <span className="font-label text-xs text-primary-dim uppercase tracking-[0.4em]">Data Narrative</span>
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold">Power BI Projects</h1>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <Link key={i} to={project.link}>
              <div className="relative pl-12 group">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-primary-dim to-transparent opacity-30"></div>
                <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#ff8ba1]"></div>

                <div className="glass-panel p-6 sm:p-12 rounded-2xl border border-outline-variant/10 group-hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-headline text-3xl font-bold text-on-background">{project.title}</h3>
                      <span className="font-label text-xs text-primary-dim uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                  <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-8">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface-variant uppercase">
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

export default ProjectListBI;
