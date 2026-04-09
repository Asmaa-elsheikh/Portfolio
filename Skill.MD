---
name: antigravity-portfolio
description: >
  Use this skill when building, extending, or updating "Asmaa Ali" personal
  portfolio website in Antigravity for an Analytics & AI Product Manager. Triggers
  include: any request to create or modify portfolio sections (Inception/Hero,
  Synthesis/Analytics, Impact/AI Projects, Vision/About, Contact), scaffold new
  project cards, add stack blocks, update navigation, or match the existing
  dark-pink design system. Also use when adding a new project, updating copy,
  or generating content that fits the portfolio's positioning. Do NOT use for
  unrelated frontend work, general React components, or non-portfolio Antigravity tasks.
---

# Asmaa Ali — Antigravity Portfolio Skill

This skill documents and extends the **live portfolio site** for an Analytics & AI Product Manager. The site is built with **Tailwind CSS**, **Google Fonts (Manrope, Inter, Space Grotesk)**, and **Material Symbols Outlined** icons. It uses a dark, minimal aesthetic with a **neon pink accent** system.

---

## 1. Brand & Positioning

**Site name:** Asmaa Ali  
**Tagline:** Analytics & AI Product Manager building data-driven systems that scale  
**Themes:** Execution over theory · From data → insight → action · AI applied to real problems  
**Tone:** Confident, practical, zero buzzwords  

---

## 2. Design System

### Color Tokens (Tailwind custom config)

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#ff8ba1` | Icons, borders, accents |
| `primary-dim` | `#e2165f` | CTA gradient start, section dividers |
| `background` / `surface` | `#0c0e12` | Page background |
| `surface-container` | `#171a1f` | Section background |
| `surface-container-high` | `#1d2025` | Cards |
| `surface-container-highest` | `#23262c` | Elevated cards, tag chips |
| `surface-container-lowest` | `#000000` | Deepest cards (AI section) |
| `on-background` | `#f6f6fc` | Primary text |
| `on-surface-variant` | `#aaabb0` | Muted text, subtitles |
| `outline-variant` | `#46484d` | Card borders |
| `secondary-container` | `#802053` | Badge backgrounds |
| `on-secondary-container` | `#ffbed7` | Badge text |

---

### Typography

| Role | Font | Tailwind class |
|---|---|---|
| Headings / Hero | Manrope | `font-headline` |
| Body / Paragraphs | Inter | `font-body` |
| Labels / Nav / Tags | Space Grotesk | `font-label` |

---

### Reusable CSS Classes

```css
.glass-panel {
  background: rgba(35, 38, 44, 0.6);
  backdrop-filter: blur(24px);
}

.journey-spine {
  background: linear-gradient(to bottom, #e2165f 0%, rgba(226,22,95,0) 100%);
}
Icons
<span class="material-symbols-outlined" data-icon="ICON_NAME">ICON_NAME</span>
3. Site Architecture & Sections
Navigation (Sticky)
Label	Anchor
Inception	#inception
Synthesis	#synthesis
Impact	#impact
Vision	#vision

Right side:

Download icon
Hire Me button (bg-gradient-to-br from-primary-dim to-primary)
Side Progress Spine

Phases:

Phase 01
Phase 02
Phase 03
Phase 04
Section 1 — Inception (#inception) · Hero
Badge:
<div class="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-[0.2em]">
  Analytics × AI
</div>
Headline:
<h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
  Asmaa Ali
</h1>
Sub-headline (with gradient emphasis):
<p class="font-headline text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
  Building systems that turn data into decisions
</p>
Supporting text:
<p class="font-body text-xl text-on-surface-variant max-w-3xl font-light">
  I design and ship analytics and AI products — from dashboards to intelligent workflows — with a focus on adoption, performance, and real impact.
</p>
CTA:
<a href="#synthesis" class="inline-flex items-center gap-3 text-primary font-label text-sm uppercase tracking-widest hover:gap-5 transition-all">
  View My Work
  <span class="material-symbols-outlined">south</span>
</a>
Section 2 — Synthesis (#synthesis) · Power BI Analytics
Left Column
Title: The Analytics Story
Description: Translating complex datasets into operational clarity and decision-making tools
Badge: query_stats + Power BI Mastery
Power BI Project Card Template
<div class="relative pl-12 group">
  <div class="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-primary-dim to-transparent opacity-30"></div>
  <div class="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#ff8ba1]"></div>

  <div class="glass-panel p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all">

    <div class="flex justify-between items-start mb-6">
      <div>
        <h3 class="font-headline text-2xl font-bold text-on-background">PROJECT TITLE</h3>
        <span class="font-label text-xs text-primary-dim uppercase tracking-wider">CATEGORY</span>
      </div>
    </div>

    <p class="font-body text-on-surface-variant text-sm">Project description...</p>

    <div class="flex gap-4 mt-6">
      <span class="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface-variant">TAG</span>
    </div>

  </div>
</div>
Current Projects
Traceability Dashboard
14% Lead Time Reduction
99.2% Data Accuracy
Stack: SQL Server, DAX
Sales & Distribution Analytics
Unified 12 data sources
Revenue insights
Section 3 — Impact (#impact) · AI Projects
Header
Phase 03
Title: The AI Speed
AI Project Card Template
<div class="bg-surface-container-lowest p-1 rounded-xl border border-outline-variant/10 hover:shadow-[0_0_40px_rgba(226,22,95,0.1)] transition-all">
  <div class="p-8 space-y-6">

    <div class="flex items-center gap-3">
      <span class="material-symbols-outlined text-primary">smart_toy</span>
      <h3 class="font-headline text-2xl font-bold">PROJECT TITLE</h3>
    </div>

    <p class="font-body text-on-surface-variant">Description...</p>

  </div>
</div>
Current AI Projects
QR Code AI Chatbot
QR-to-LLM interface
Stack: GPT-4o, Supabase, Vercel
Book Review Aggregator
Multi-platform sentiment engine
<400ms latency
Section 4 — Vision (#vision) · About
Title

The Bridge between Tech & Business

Columns
Deep Analytics
AI Integration
Strategic ROI
Section 5 — Contact
CTA

Ready to scale your intelligence?

Primary: Start a Project
Icons: Email · LinkedIn
Footer
Asmaa Ali
LinkedIn · GitHub · Resume · Email
4. Adding New Sections
Use Cases (#use-cases)
Context · Problem · Solution · KPIs
About (#about)
Photo + short bio
Expertise tags
5. Reusable Snippets
Tag Chip
<span class="px-3 py-1 bg-surface-container-highest rounded text-[10px] font-label text-on-surface-variant">
  Tag Name
</span>
Section Header
<div class="flex flex-col items-center mb-20 text-center">
  <h2 class="font-headline text-5xl font-extrabold text-on-background">Section Title</h2>
</div>
6. Project Checklist
Clear problem
Measurable impact
Visual included
Links working
Accurate stack
No buzzwords
7. Roadmap
Phase	Status
MVP	✅ Live
Phase 2	🔄 In Progress
Phase 3	⏳ Planned
8. Hosting & Analytics
Static export
Deploy: Vercel / Netlify
Track:
CTA clicks
Scroll depth
Project interactions