import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { ACTION_PATHWAYS, SUPPORT_NETWORK, GLOSSARY_TERMS, FAQ_DATA } from '../data/helpData';
import { SourceLabel } from './SourceLabel';
import { HelpCircle, Search, ArrowRight, UserCheck, BookOpen, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface HelpViewProps {
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
  onOpenSearch: () => void;
  initialSection?: string;
}

export const HelpView: React.FC<HelpViewProps> = ({
  onSelectTab,
  onOpenPolicy,
  onOpenSearch
}) => {
  const [glossarySearch, setGlossarySearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredGlossary = GLOSSARY_TERMS.filter((g) => {
    const q = glossarySearch.toLowerCase();
    return (
      g.term.toLowerCase().includes(q) ||
      (g.fullForm && g.fullForm.toLowerCase().includes(q)) ||
      g.definition.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in text-slate-100">
      {/* Header Section */}
      <div className="border-b border-[#162E21] pb-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 font-mono text-xs font-bold text-[#00FF66] tracking-widest uppercase">
            ESYASOFT / HELP & REFERENCE
          </span>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
          HELP, SUPPORT & GLOSSARY
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl">
          Direct action pathways for common needs, who to ask for help, domain glossary, and verified answers to common questions.
        </p>
      </div>

      {/* Sub-Section 1: I NEED TO... */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#00FF66]" />
            <span>I NEED TO... (DIRECT ACTION PATHWAYS)</span>
          </h2>
          <SourceLabel type="ONBOARDING GUIDANCE" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {ACTION_PATHWAYS.map((act) => (
            <div
              key={act.id}
              onClick={() => {
                if (act.id === 'act-find-guide') {
                  onOpenSearch();
                } else {
                  onSelectTab(act.targetTab, act.targetSection);
                  if (act.policyId) onOpenPolicy(act.policyId);
                }
              }}
              className="p-4 bg-[#07110D] border border-[#162E21] hover:border-[#00FF66]/50 rounded-xl cursor-pointer group transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-white font-bold mb-1 group-hover:text-[#00FF66]">
                  <span>{act.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">{act.description}</p>
              </div>
              <div className="pt-2 text-[10px] text-emerald-400">Route →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 2: WHO DO I ASK? */}
      <section id="who-do-i-ask" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#00FF66]" />
            <span>WHO DO I ASK? (SUPPORT NETWORK)</span>
          </h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {SUPPORT_NETWORK.map((contact, idx) => (
            <div key={idx} className="p-6 bg-[#07110D] border border-[#162E21] rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                <span className="text-sm font-bold text-[#00FF66]">{contact.role}</span>
                <span className="text-[10px] text-slate-400">{contact.contactMethod}</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{contact.description}</p>
              <div className="pt-2 border-t border-[#162E21] space-y-1 text-[11px] text-slate-400">
                <div>When to contact: <span className="text-slate-200">{contact.whenToContact}</span></div>
                <div>Escalation: <span className="text-emerald-300">{contact.escalationPath}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 3: GLOSSARY */}
      <section id="glossary" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#162E21] pb-3">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-400" />
            <span>COMPANY & ENERGY GLOSSARY</span>
          </h2>
          <SourceLabel type="COMPANY CONTEXT" />
        </div>

        {/* Glossary Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={glossarySearch}
            onChange={(e) => setGlossarySearch(e.target.value)}
            placeholder="Search acronyms (MDMS, AMI, HES, BESS, CPMS, VEE, POSH)..."
            className="w-full pl-10 pr-4 py-2 bg-[#07110D] border border-[#162E21] focus:border-teal-400 rounded-lg text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {filteredGlossary.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#07110D] border border-[#162E21] rounded-xl space-y-2">
              <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#00FF66]">{item.term}</span>
                  {item.fullForm && <span className="text-xs text-slate-400 font-normal">({item.fullForm})</span>}
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-black/60 text-slate-400 border border-slate-800">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-Section 4: FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#162E21] pb-2">
          <h2 className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00FF66]" />
            <span>FREQUENTLY ASKED QUESTIONS (FAQ)</span>
          </h2>
          <SourceLabel type="OFFICIAL" />
        </div>

        <div className="space-y-3 font-mono text-xs">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#07110D] border border-[#162E21] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#050807] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-white">{faq.question}</span>
                    <SourceLabel type={faq.sourceType} />
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#00FF66]" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>

                {isOpen && (
                  <div className="p-4 bg-[#050807] border-t border-[#162E21] font-sans text-xs text-slate-300 leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    {faq.policyId && (
                      <button
                        onClick={() => onOpenPolicy(faq.policyId!)}
                        className="px-3 py-1 rounded bg-[#00FF66]/15 border border-[#00FF66]/30 text-[#00FF66] font-mono font-bold text-[11px] hover:bg-[#00FF66]/30 transition-all inline-flex items-center gap-1"
                      >
                        <span>[ READ OFFICIAL POLICY ]</span>
                        <span>→</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
