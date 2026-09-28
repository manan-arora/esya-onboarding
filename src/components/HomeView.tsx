import React from 'react';
import type { ViewTab } from '../types';
import { EsyasoftGrid } from './EsyasoftGrid';
import { ArrowRight, ChevronRight, Compass } from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const routerOptions = [
    { label: 'I am joining soon.', targetTab: 'START_HERE' as ViewTab, sectionId: 'before-you-join', actionText: 'Before You Join' },
    { label: 'It is my first day.', targetTab: 'START_HERE' as ViewTab, sectionId: 'first-day', actionText: 'First Day' },
    { label: 'I am in my first week.', targetTab: 'START_HERE' as ViewTab, sectionId: 'first-week', actionText: 'First Week' },
    { label: 'I want to understand Esyasoft.', targetTab: 'ESYASOFT' as ViewTab, actionText: 'Esyasoft' },
    { label: 'I do not understand how things work here.', targetTab: 'HOW_WE_WORK' as ViewTab, actionText: 'How We Work' },
    { label: 'I need to get something done.', targetTab: 'START_HERE' as ViewTab, sectionId: 'i-need-to', actionText: 'I Need To' },
    { label: 'I am somewhere in my first 90 days.', targetTab: 'FIRST_90' as ViewTab, actionText: 'First 90' }
  ];

  return (
    <div className="space-y-24 pb-20 font-sans text-[#061210] selection:bg-[#8CFF00] selection:text-[#061210]">
      
      {/* 01. HERO SECTION */}
      <section className="relative pt-10 pb-16 overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 6 Cols */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold tracking-widest uppercase shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8CFF00] animate-ping" />
                <span>ESYASOFT / FIRST 90</span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-7xl font-extrabold text-[#061210] tracking-tight leading-[0.95]">
                  Welcome to <br />
                  <span className="text-[#061210] underline decoration-[#8CFF00] decoration-4 underline-offset-8">
                    Esyasoft.
                  </span>
                </h1>
              </div>

              {/* Body */}
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
                Your first few months are about finding your feet, understanding the company, meeting people, and learning how work gets done. You do not need to know everything on Day 1. This guide helps you know what to look for, what to ask, and where to go when you need something.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectTab('START_HERE')}
                  className="v1-btn-primary px-8 py-4 text-xs flex items-center gap-3 cursor-pointer"
                >
                  <span>START HERE</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  onClick={() => onSelectTab('ESYASOFT')}
                  className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 border border-[#E2E4DC] text-[#061210] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>UNDERSTAND ESYASOFT</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

            </div>

            {/* Right 6 Cols: Integrated Visual Esyasoft System Grid */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01]">
                <EsyasoftGrid
                  onNavigateNode={(tab, section) => onSelectTab(tab, section)}
                  selectedNodeId="you"
                  darkTheme={true}
                  integrated={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-white border border-[#E2E4DC] rounded-3xl space-y-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block">
              ● ONBOARDING PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061210]">
              You are not expected to figure everything out alone.
            </h2>
          </div>

          <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
            <p>
              Starting somewhere new comes with a lot of small questions.
            </p>
            <p className="font-semibold text-[#061210]">
              Who should I talk to? Where do I find this? How does this process work? What does this team actually do? What am I expected to understand in my first month?
            </p>
            <p>
              Those questions are normal.
            </p>
            <p>
              Use this guide as a starting point. Your manager, teammates, HR, IT and other colleagues are part of your onboarding too. Ask when you are unsure, keep notes, and give yourself time to understand the bigger picture.
            </p>
          </div>
        </div>
      </section>

      {/* 03. FOUR DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● FOUR PRIMARY DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061210]">
            Where to go in this guide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* START HERE */}
          <div
            onClick={() => onSelectTab('START_HERE')}
            className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 border border-[#14332B] shadow-xl hover:border-[#8CFF00] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#8CFF00] text-[#061210] font-extrabold text-[10px] uppercase">
                DESTINATION 01
              </span>
              <ChevronRight className="w-5 h-5 text-[#8CFF00] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-3xl font-extrabold text-white">START HERE</h3>
            <span className="text-sm font-extrabold text-[#8CFF00] block">The practical beginning.</span>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Before you join, on your first day, during your first week, and whenever you need to find something quickly.
            </p>
          </div>

          {/* ESYASOFT */}
          <div
            onClick={() => onSelectTab('ESYASOFT')}
            className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 border border-[#14332B] shadow-xl hover:border-[#8CFF00] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#8CFF00] text-[#061210] font-extrabold text-[10px] uppercase">
                DESTINATION 02
              </span>
              <ChevronRight className="w-5 h-5 text-[#8CFF00] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-3xl font-extrabold text-white">ESYASOFT</h3>
            <span className="text-sm font-extrabold text-[#8CFF00] block">Understand where you have joined.</span>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Who we are, why we exist, what we work on, how the energy ecosystem fits together, and how different parts of the company connect.
            </p>
          </div>

          {/* HOW WE WORK */}
          <div
            onClick={() => onSelectTab('HOW_WE_WORK')}
            className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 border border-[#14332B] shadow-xl hover:border-[#8CFF00] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#8CFF00] text-[#061210] font-extrabold text-[10px] uppercase">
                DESTINATION 03
              </span>
              <ChevronRight className="w-5 h-5 text-[#8CFF00] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-3xl font-extrabold text-white">HOW WE WORK</h3>
            <span className="text-sm font-extrabold text-[#8CFF00] block">Learn the everyday rhythm of work.</span>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Communication, collaboration, ownership, feedback, workplace systems, policies and the people you can ask for help.
            </p>
          </div>

          {/* FIRST 90 */}
          <div
            onClick={() => onSelectTab('FIRST_90')}
            className="p-8 bg-[#061210] text-white rounded-3xl space-y-4 border border-[#14332B] shadow-xl hover:border-[#8CFF00] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#8CFF00] text-[#061210] font-extrabold text-[10px] uppercase">
                DESTINATION 04
              </span>
              <ChevronRight className="w-5 h-5 text-[#8CFF00] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-3xl font-extrabold text-white">FIRST 90</h3>
            <span className="text-sm font-extrabold text-[#8CFF00] block">A simple route through your first three months.</span>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Connect first. Understand next. Then participate and contribute.
            </p>
          </div>

        </div>
      </section>

      {/* 04. QUICK ROUTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● QUICK ROUTER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061210]">
            What do you need right now?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routerOptions.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => onSelectTab(opt.targetTab, opt.sectionId)}
              className="p-6 bg-white border border-[#E2E4DC] hover:border-[#061210] rounded-2xl cursor-pointer transition-all hover:shadow-md flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{opt.label}</span>
                <span className="text-sm font-extrabold text-[#061210] group-hover:text-emerald-700 mt-1 block">
                  → {opt.actionText}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#061210] group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </section>

      {/* 05. PRINCIPLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#061210] text-white border border-[#14332B] space-y-4 shadow-2xl">
          <span className="text-xs font-extrabold text-[#8CFF00] uppercase tracking-widest block">
            ● GUIDING PRINCIPLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            You do not need to know everything. You need to know where to find it.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            A good onboarding experience does not try to put the entire company into one document. It gives you enough context to make sense of what you are seeing, enough practical information to take the next step, and enough direction to know who to ask when the answer is not on the page. That is what this guide is for.
          </p>
        </div>
      </section>

    </div>
  );
};
