import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { BEFORE_YOU_JOIN_ITEMS, FIRST_DAY_CHECKLIST, FIRST_WEEK_FRAMEWORK, USEFUL_FIRST_WEEK_QUESTIONS } from '../data/onboardingData';
import { SourceLabel } from './SourceLabel';
import { CheckSquare, Square, HelpCircle } from 'lucide-react';

interface StartHereViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy?: (policyId: string) => void;
}

export const StartHereView: React.FC<StartHereViewProps> = () => {
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in text-slate-100">
      {/* Header Section */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            SECTION 01
          </span>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          START HERE: YOUR ONBOARDING GUIDE
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          Everything you need to know before joining, on your first day, and during your first week at Esyasoft.
        </p>
      </div>

      {/* Sub-Section 1: BEFORE YOU JOIN */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <span>BEFORE YOU JOIN</span>
          </h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <p className="text-xs text-slate-400 font-sans">
          Verified pre-joining guidelines. Items requiring individual HR assignment are clearly labeled.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {BEFORE_YOU_JOIN_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                item.placeholderIfMissing
                  ? 'bg-slate-900/40 border-amber-500/30'
                  : 'bg-[#07110D] border-[#162E21]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">PRE-JOINING ITEM</span>
                {item.placeholderIfMissing ? (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                    PENDING HR
                  </span>
                ) : (
                  <SourceLabel type="OFFICIAL" />
                )}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {item.placeholderIfMissing ? (
                  <span className="text-amber-300 italic font-mono">"Information to be provided by HR."</span>
                ) : (
                  item.detail
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 2: YOUR FIRST DAY (CONNECT, ACCESS, ORIENT) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">YOUR FIRST DAY: CONNECT, ACCESS, ORIENT</h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px] tracking-wider uppercase">
              PILLAR 01
            </span>
            <h3 className="text-base font-bold text-white">CONNECT</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Meet your reporting manager, introduce yourself to team members, and understand the core role expectations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-800/40 space-y-2">
            <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-bold text-[10px] tracking-wider uppercase">
              PILLAR 02
            </span>
            <h3 className="text-base font-bold text-white">ACCESS</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Set up your corporate email, log in to Zoho People (HRMS), join MS Teams channels, and request IT permissions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
            <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 font-bold text-[10px] tracking-wider uppercase">
              PILLAR 03
            </span>
            <h3 className="text-base font-bold text-white">ORIENT</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Understand immediate priorities, office layout, emergency contacts, and where to find policy guidance.
            </p>
          </div>
        </div>

        {/* First Day Practical Checklist */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4 font-mono">
          <div className="flex items-center justify-between border-b border-[#162E21] pb-3">
            <h3 className="text-sm font-bold text-[#00FF66] uppercase tracking-wider">
              FIRST DAY ACTION CHECKLIST
            </h3>
            <span className="text-xs text-slate-400 font-sans">Click items to mark completed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FIRST_DAY_CHECKLIST.map((item) => {
              const checked = !!completedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                    checked
                      ? 'bg-emerald-950/40 border-[#00FF66]/50 text-slate-200'
                      : 'bg-[#050807] border-[#162E21] hover:border-[#00FF66]/30 text-slate-300'
                  }`}
                >
                  <div className="mt-0.5 text-[#00FF66]">
                    {checked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-600" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 block tracking-widest">
                      [{item.category}]
                    </span>
                    <span className={`text-xs font-sans ${checked ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-Section 3: YOUR FIRST WEEK */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white">YOUR FIRST WEEK: SETTLING IN</h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        {/* 5 Stage Framework */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 font-mono text-xs">
          {FIRST_WEEK_FRAMEWORK.map((fw, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#07110D] border border-[#162E21] space-y-2">
              <span className="text-[10px] font-bold text-[#00FF66] tracking-widest block">
                0{idx + 1}. {fw.stage}
              </span>
              <h3 className="text-xs font-bold text-white">{fw.title}</h3>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{fw.guidance}</p>
            </div>
          ))}
        </div>

        {/* Useful Questions to Ask */}
        <div className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3 font-mono">
          <h3 className="text-sm font-bold text-[#00FF66] uppercase tracking-wider flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>USEFUL QUESTIONS TO ASK IN YOUR FIRST WEEK</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 font-sans">
            {USEFUL_FIRST_WEEK_QUESTIONS.map((q, idx) => (
              <li key={idx} className="p-3 bg-[#050807] border border-[#162E21] rounded-lg flex items-start gap-2">
                <span className="text-[#00FF66] font-mono font-bold">{idx + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
