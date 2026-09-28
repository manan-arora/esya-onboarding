import React from 'react';
import type { ViewTab } from '../types';
import { EsyasoftGrid } from './EsyasoftGrid';
import { SourceLabel } from './SourceLabel';
import { ArrowRight, Zap } from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-12 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-16 overflow-hidden">
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-hero opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
                ESYASOFT / FIRST 90
              </span>
              <SourceLabel type="ONBOARDING GUIDANCE" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              FIND YOUR PLACE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-teal-300">
                IN THE SYSTEM.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed">
              A practical guide to understanding Esyasoft, how we work, where to find what you need, and how to settle into your first 90 days.
            </p>

            {/* Core Guiding Principle Banner */}
            <div className="p-4 rounded-lg bg-[#07110D] border border-[#162E21] font-mono text-xs text-slate-300 flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#00FF66] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#00FF66] font-bold block uppercase tracking-wider">GUIDING PRINCIPLE</span>
                <p className="text-slate-200 mt-0.5">
                  "You don't need to know everything on Day 1. You just need to know where to find it."
                </p>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-sm">
              <button
                onClick={() => onSelectTab('START_HERE')}
                className="px-6 py-3 rounded-lg bg-[#00FF66] hover:bg-[#00E676] text-[#050807] font-bold transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2 group"
              >
                <span>START HERE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('interactive-grid-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-[#162E21] hover:border-[#00FF66]/40 text-slate-200 hover:text-white font-medium transition-all flex items-center gap-2"
              >
                <span>EXPLORE THE GRID</span>
                <ArrowRight className="w-4 h-4 text-[#00FF66]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual: Interactive Esyasoft Energy Network Grid */}
      <section id="interactive-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#162E21] pb-3">
          <div>
            <h2 className="text-lg font-bold font-mono text-white flex items-center gap-2">
              <span>THE ESYASOFT SYSTEM GRID</span>
              <span className="text-xs text-slate-400 font-normal font-sans">(Click any node to navigate)</span>
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              Interconnected energy & information architecture mapping how company, business, people, policies, and systems connect.
            </p>
          </div>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <EsyasoftGrid
          onNavigateNode={(targetTab, targetSection) => onSelectTab(targetTab, targetSection)}
          selectedNodeId="you"
        />
      </section>

      {/* Quick Launch Ecosystem Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-3">
          <h2 className="text-xl font-bold font-mono text-white">CORE ORIENTATION PATHWAYS</h2>
          <span className="font-mono text-xs text-slate-400">Production Reference Guide</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          {/* Card 1: Start Here */}
          <div
            onClick={() => onSelectTab('START_HERE')}
            className="p-5 rounded-xl bg-[#07110D] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer group transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#00FF66] font-bold uppercase tracking-wider">ONBOARDING</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-[#00FF66]">START HERE</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Before you join details, Day 1 checklist (Connect, Access, Orient), and First Week framework.
            </p>
            <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1">
              <span>Explore Checklists</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2: Policy Library */}
          <div
            onClick={() => onSelectTab('WORKPLACE', 'policies')}
            className="p-5 rounded-xl bg-[#07110D] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer group transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <SourceLabel type="OFFICIAL" />
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-[#00FF66]">POLICY LIBRARY</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Official Esyasoft policies: Leave Policy, Travel, PMS, PIP, POSH, HRMS Handbook, Referrals, & Training.
            </p>
            <div className="pt-2 text-[11px] text-[#00FF66] flex items-center gap-1">
              <span>Read Official Documents</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: Our Business */}
          <div
            onClick={() => onSelectTab('BUSINESS')}
            className="p-5 rounded-xl bg-[#07110D] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer group transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider">ECOSYSTEM</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-[#00FF66]">OUR BUSINESS</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Understand the Energy System: Smart Meters, Follow the Data pipeline, AI analytics, BESS, & Products.
            </p>
            <div className="pt-2 text-[11px] text-teal-400 flex items-center gap-1">
              <span>Follow the Data</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
