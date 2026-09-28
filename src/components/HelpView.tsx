import React, { useState } from 'react';
import type { ViewTab } from '../types';
import { ACTION_PATHWAYS, SUPPORT_NETWORK, GLOSSARY_TERMS, FAQ_DATA } from '../data/helpData';
import { Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface HelpViewProps {
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
  onOpenSearch: () => void;
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
    <div className="space-y-20 pb-20 font-sans text-[#061210]">
      
      {/* 01. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
        <div className="border-b border-[#E2E4DC] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061210] text-[#8CFF00] text-xs font-extrabold uppercase tracking-widest">
            <span>● HELP & DIRECTORY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#061210] tracking-tight leading-tight">
            Help, Support & Glossary.
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
            Direct action pathways for common onboarding needs, contact directory, utility domain glossary, and answers to common questions.
          </p>
        </div>
      </section>

      {/* 02. DIRECT ACTION PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● QUICK ACTIONS
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            I Need To...
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="p-6 bg-white border border-[#E2E4DC] hover:border-[#061210] rounded-3xl cursor-pointer group transition-all space-y-4 flex flex-col justify-between shadow-xs"
            >
              <div>
                <h3 className="text-lg font-extrabold text-[#061210] group-hover:text-emerald-700 flex items-center justify-between">
                  <span>{act.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#061210] group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2">{act.description}</p>
              </div>
              <span className="text-[11px] font-extrabold text-[#061210] uppercase tracking-wider">
                GO TO ROUTE →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 03. WHO DO I ASK? (SUPPORT NETWORK) */}
      <section id="who-do-i-ask" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E2E4DC] pb-4">
          <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
            ● SUPPORT DIRECTORY
          </span>
          <h2 className="text-3xl font-extrabold text-[#061210]">
            Who Do I Ask?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPORT_NETWORK.map((contact, idx) => (
            <div key={idx} className="p-6 bg-[#061210] text-white border border-[#14332B] rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#14332B] pb-2">
                <span className="text-xs font-extrabold text-[#8CFF00] uppercase">{contact.role}</span>
                <span className="text-[10px] font-mono text-slate-400">{contact.contactMethod}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{contact.whenToContact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. DOMAIN GLOSSARY & FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Glossary */}
        <div id="glossary" className="space-y-6">
          <div className="border-b border-[#E2E4DC] pb-4">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
              ● DOMAIN DICTIONARY
            </span>
            <h2 className="text-3xl font-extrabold text-[#061210]">
              Esyasoft & Utility Glossary
            </h2>
          </div>

          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Search terms (HES, MDMS, AMI, BESS, DISCOM, AMR)..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#E2E4DC] focus:border-[#061210] rounded-2xl text-xs font-medium text-[#061210] placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((g, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#E2E4DC] rounded-2xl space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-extrabold text-[#061210]">{g.term}</span>
                  {g.fullForm && (
                    <span className="text-xs font-mono text-slate-500">({g.fullForm})</span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="space-y-6">
          <div className="border-b border-[#E2E4DC] pb-4">
            <span className="text-xs font-extrabold text-[#061210] uppercase tracking-widest block mb-1">
              ● COMMON QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-[#061210]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="bg-white border border-[#E2E4DC] rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-extrabold text-sm text-[#061210] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[#061210]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isExpanded && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-[#E2E4DC] bg-[#F4F5F0]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
};
