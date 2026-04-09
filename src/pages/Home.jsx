import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
            <a href="#inception" className="hover:text-primary transition-colors">Inception</a>
            <a href="#synthesis" className="hover:text-primary transition-colors">Synthesis</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#vision" className="hover:text-primary transition-colors">Vision</a>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 glass-panel rounded-full"
          >
            <motion.div animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }} className="w-5 h-[2px] bg-primary rounded-full" />
            <motion.div animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-5 h-[2px] bg-primary rounded-full" />
            <motion.div animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }} className="w-5 h-[2px] bg-primary rounded-full" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-panel border-b border-outline-variant/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-6 font-label text-sm uppercase tracking-widest text-on-surface-variant">
            <a href="#inception" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Inception</a>
            <a href="#synthesis" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Synthesis</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Impact</a>
            <a href="#vision" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Vision</a>
          </div>
        </motion.div>
      </nav>

      <main className="px-4 sm:px-12 md:px-24">
        {/* Side Progress Spine (Decorative) */}
        <div className="fixed left-6 md:left-12 top-0 bottom-0 w-[1px] journey-spine opacity-20 hidden md:block" />

        {/* Section 1: Inception (Hero) */}
        <section id="inception" className="min-h-[80vh] flex flex-col justify-center py-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-[0.2em]">
              Analytics × AI
            </div>

            <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1]">
              Asmaa Ali
            </h1>

            <div className="flex flex-wrap gap-6 pt-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
              <a 
                href="https://www.linkedin.com/in/asmaa-ali-8a4738125" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-lg">link</span>
                LinkedIn
              </a>
              <a 
                href="https://github.com/Asmaa-elsheikh/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-lg">terminal</span>
                GitHub
              </a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                Message Me
              </button>
            </div>

            <p className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Building systems that turn data into decisions
            </p>

            <p className="font-body text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              I design and ship analytics and AI products — from dashboards to intelligent workflows — with a focus on adoption, performance, and real impact.
            </p>

            <div className="pt-8">
              <a href="#synthesis" className="inline-flex items-center gap-3 text-primary font-label text-sm uppercase tracking-widest hover:gap-5 transition-all group">
                View My Work
                <span className="material-symbols-outlined transition-transform">south</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Placeholder for other sections */}
        <section id="synthesis" className="py-12">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader title="Synthesis" subtitle="The Analytics Story" noMargin />
            <Link to="/projects/bi" className="text-primary font-label text-xs uppercase tracking-widest hover:gap-3 transition-all flex items-center gap-2 mb-2">
              View All Analytics
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
          </div>
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Link to="/projects/electronics-rating">
              <ProjectCard
                title="Electronics Product Rating"
                category="Consumer Electronics Analytics"
                description="Analyzing 7.2K+ product reviews to uncover sentiment and brand performance across 38 brands."
                kpis={["7.2K+ Reviews Analyzed", "4.37 Avg Rating"]}
                tags={["Power BI", "Data Visualization", "Sentiment Analysis"]}
              />
            </Link>
            <Link to="/projects/cafe-offers">
              <ProjectCard
                title="Cafe Offers Analytics"
                category="Retail & Hospitality"
                description="Optimizing promotional ROI and tracking customer behavior across loyalty segments."
                kpis={["Offer ROI Analysis", "Customer Behavior", "Operational Efficiency"]}
                tags={["Power BI", "Data Modeling", "Business Intelligence"]}
              />
            </Link>
          </div>
        </section>

        <section id="impact" className="py-12">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader title="Impact" subtitle="The AI Speed" noMargin />
            <Link to="/projects/ai" className="text-primary font-label text-xs uppercase tracking-widest hover:gap-3 transition-all flex items-center gap-2 mb-2">
              Explore AI Suite
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Link to="/projects/voice-chatbot">
              <AIProjectCard
                title="Voice AI Chatbot"
                description="Interactive voice-to-voice interface for seamless real-time conversations."
                tags={["OpenAI", "Lovable", "Supabase"]}
              />
            </Link>
            <Link to="/projects/installments">
              <AIProjectCard
                title="Installments SaaS"
                description="NLP-driven interface for managing customer installment plans with AI-automated calculations."
                tags={["SaaS", "Next.js", "AI Financing"]}
              />
            </Link>
          </div>
        </section>

        <section id="vision" className="py-12">
          <SectionHeader title="Vision" subtitle="Tech & Business" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <VisionBlock icon="query_stats" title="Deep Analytics" />
            <VisionBlock icon="smart_toy" title="AI Integration" />
            <VisionBlock icon="trending_up" title="Strategic ROI" />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 text-center">
          <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl font-extrabold mb-8 italic">Ready to scale your intelligence?</h2>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-12 py-4 rounded-full bg-gradient-to-br from-primary-dim to-primary text-white font-label text-lg uppercase tracking-widest font-bold shadow-2xl shadow-primary-dim/40 hover:scale-105 transition-transform"
          >
            Start a Project
          </button>
        </section>
      </main>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

const SectionHeader = ({ title, subtitle, noMargin }) => (
  <div className={noMargin ? "" : "mb-10"}>
    <span className="font-label text-xs uppercase tracking-[0.3em] text-primary-dim mb-4 block">{title}</span>
    <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-background">{subtitle}</h2>
  </div>
);

const ProjectCard = ({ title, category, description, kpis, tags }) => (
  <div className="relative pl-12 group">
    <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-primary-dim to-transparent opacity-30"></div>
    <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#ff8ba1]"></div>

    <div className="glass-panel p-6 sm:p-8 rounded-xl border border-outline-variant/10 group-hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-headline text-2xl font-bold text-on-background">{title}</h3>
          <span className="font-label text-xs text-primary-dim uppercase tracking-wider">{category}</span>
        </div>
      </div>
      <p className="font-body text-on-surface-variant text-sm mb-6">{description}</p>

      <div className="space-y-2 mb-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="flex items-center gap-2 text-primary text-sm font-medium">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            {kpi}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface-variant uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const AIProjectCard = ({ title, description, tags }) => (
  <div className="bg-surface-container-lowest p-1 rounded-2xl border border-outline-variant/10 hover:shadow-[0_0_40px_rgba(226,22,95,0.1)] transition-all group">
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
        <h3 className="font-headline text-2xl font-bold">{title}</h3>
      </div>
      <p className="font-body text-on-surface-variant leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-surface-container-highest/50 rounded text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const VisionBlock = ({ icon, title }) => (
  <div className="text-center p-8 glass-panel rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all">
    <span className="material-symbols-outlined text-primary text-5xl mb-6">{icon}</span>
    <h3 className="font-headline text-xl font-bold uppercase tracking-widest">{title}</h3>
  </div>
);

export default Home;
