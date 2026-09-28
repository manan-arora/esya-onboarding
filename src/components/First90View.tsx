import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { FIRST_90_TIMELINE_STAGES, REFLECTIVE_CONVERSATIONS } from '../data/onboardingData';
import { SourceLabel } from './SourceLabel';
import { HelpCircle, CheckCircle, Compass, MessageSquareQuote } from 'lucide-react';

interface First90ViewProps {
  onSelectTab?: (tab: ViewTab, sectionId?: string) => void;
}

export const First90View: React.FC<First90ViewProps> = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-7-days');

  const activeStage = FIRST_90_TIMELINE_STAGES.find((s) => s.id === selectedStageId) || FIRST_90_TIMELINE_STAGES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in text-slate-100">
      {/* Header Section */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / FIRST 90
          </span>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
          THE FIRST 90 DAYS ORIENTATION FRAMEWORK
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          An orientation framework—not a rigid checklist or progress tracker. Use this connected timeline as a guide during your first 90 days.
        </p>
      </div>

      {/* Interactive Connected Timeline Nodes Bar */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2 font-mono text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider">TIMELINE ROUTE</span>
          <span className="text-[#00FF66]">Select a stage to explore guidance</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          {FIRST_90_TIMELINE_STAGES.map((stage) => {
            const isSelected = selectedStageId === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-4 rounded-xl border transition-all text-left space-y-2 ${
                  isSelected
                    ? 'bg-[#00FF66] text-[#050807] border-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.3)] font-bold'
                    : 'bg-[#07110D] text-slate-300 border-[#162E21] hover:border-[#00FF66]/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded text-[10px] ${isSelected ? 'bg-[#050807] text-[#00FF66]' : 'bg-black/50 text-[#00FF66]'}`}>
                    {stage.days}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider">{stage.phaseName}</span>
                </div>
                <h3 className="text-sm font-bold">{stage.phaseName} STAGE</h3>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Stage Detail Card */}
      <section className="p-6 sm:p-8 bg-[#07110D] border border-[#162E21] rounded-2xl space-y-8 font-mono">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#162E21] pb-4">
          <div>
            <span className="text-xs text-[#00FF66] font-bold tracking-widest block uppercase">
              STAGE DETAILS — {activeStage.days}
            </span>
            <h2 className="text-2xl font-extrabold text-white">{activeStage.phaseName}: {activeStage.tagline}</h2>
          </div>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
          {/* WHAT TO FOCUS ON */}
          <div className="space-y-3 p-5 bg-[#050807] border border-[#162E21] rounded-xl">
            <h3 className="font-mono text-sm font-bold text-[#00FF66] uppercase flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>WHAT TO FOCUS ON</span>
            </h3>
            <ul className="space-y-2 text-slate-300">
              {activeStage.whatToFocusOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00FF66] font-mono font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUESTIONS TO ASK */}
          <div className="space-y-3 p-5 bg-[#050807] border border-[#162E21] rounded-xl">
            <h3 className="font-mono text-sm font-bold text-teal-400 uppercase flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>QUESTIONS TO ASK</span>
            </h3>
            <ul className="space-y-2 text-slate-300">
              {activeStage.questionsToAsk.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-400 font-mono font-bold">?</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT TO UNDERSTAND */}
          <div className="space-y-3 p-5 bg-[#050807] border border-[#162E21] rounded-xl">
            <h3 className="font-mono text-sm font-bold text-emerald-300 uppercase flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>WHAT TO UNDERSTAND</span>
            </h3>
            <ul className="space-y-2 text-slate-300">
              {activeStage.whatToUnderstand.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HOW TO USE THIS GUIDE */}
          <div className="space-y-3 p-5 bg-[#050807] border border-emerald-800/40 rounded-xl">
            <h3 className="font-mono text-sm font-bold text-amber-300 uppercase">
              HOW TO USE THIS GUIDE AT THIS STAGE
            </h3>
            <p className="text-slate-200 leading-relaxed font-mono text-xs">{activeStage.howToUseThisGuide}</p>
          </div>
        </div>
      </section>

      {/* Sub-Section: 30 / 60 / 90 REFLECTIVE CONVERSATIONS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-[#00FF66]" />
            <span>30 / 60 / 90 REFLECTIVE CONVERSATIONS</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <p className="text-xs text-slate-400 font-sans">
          Use these reflective prompt questions during 1-on-1 conversations with your reporting manager.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {REFLECTIVE_CONVERSATIONS.map((rc, idx) => (
            <div key={idx} className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-4">
              <div className="border-b border-[#162E21] pb-2">
                <span className="text-xs font-bold text-[#00FF66] uppercase">{rc.period}</span>
                <h3 className="text-sm font-bold text-white mt-0.5">{rc.title}</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                {rc.questions.map((q, qIdx) => (
                  <li key={qIdx} className="p-2.5 bg-[#050807] border border-[#162E21] rounded-lg">
                    "{q}"
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
