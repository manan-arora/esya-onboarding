import React, { useState, useEffect } from 'react';
import type { ViewTab } from '../types';
import { POLICIES_DATA } from '../data/policiesData';
import { PRODUCT_LIBRARY } from '../data/businessData';
import { GLOSSARY_TERMS, FAQ_DATA, ACTION_PATHWAYS } from '../data/helpData';
import { SourceLabel } from './SourceLabel';
import { Search, X, ArrowRight, FileText, Cpu, Compass, BookOpen } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenPolicy: (policyId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenPolicy
}) => {
  const [query, setQuery] = useState('');

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open search modal (parent handles state or we trigger)
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search results calculation
  const policyResults = q
    ? POLICIES_DATA.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.whatItAnswers.some((a) => a.toLowerCase().includes(q)) ||
          p.keyThingsToKnow.some((k) => k.toLowerCase().includes(q)) ||
          p.contentMarkdown.toLowerCase().includes(q)
      )
    : [];

  const productResults = q
    ? PRODUCT_LIBRARY.filter(
        (prod) =>
          prod.name.toLowerCase().includes(q) ||
          prod.whatIsIt.toLowerCase().includes(q) ||
          prod.whatProblemItSolves.toLowerCase().includes(q)
      )
    : [];

  const glossaryResults = q
    ? GLOSSARY_TERMS.filter(
        (g) =>
          g.term.toLowerCase().includes(q) ||
          (g.fullForm && g.fullForm.toLowerCase().includes(q)) ||
          g.definition.toLowerCase().includes(q)
      )
    : [];

  const actionResults = q
    ? ACTION_PATHWAYS.filter(
        (a) => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
      )
    : [];

  const faqResults = q
    ? FAQ_DATA.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      )
    : [];

  const hasResults =
    policyResults.length > 0 ||
    productResults.length > 0 ||
    glossaryResults.length > 0 ||
    actionResults.length > 0 ||
    faqResults.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl bg-[#07110D] border border-[#162E21] rounded-xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 bg-[#050807] border-b border-[#162E21]">
          <Search className="w-5 h-5 text-[#00FF66] mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search policies, products, BESS, leave, per diem, HRMS, POSH..."
            className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-slate-500"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white text-xs font-mono mr-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {!q && (
            <div className="py-8 text-center text-slate-400 font-mono text-xs space-y-2">
              <Compass className="w-8 h-8 text-[#00FF66]/50 mx-auto" />
              <p>Type keywords to search across Esyasoft policies, guides, products, & glossary.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['leave', 'POSH', 'travel', 'BESS', 'MDMS', 'HRMS', 'performance'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded bg-[#050807] border border-[#162E21] text-emerald-400 hover:border-[#00FF66]/40 text-xs"
                  >
                    "{term}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-8 text-center text-slate-400 font-mono text-xs">
              No matching records found for "{query}". Try checking policies or glossary terms.
            </div>
          )}

          {/* Action Pathways Results */}
          {actionResults.length > 0 && (
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">
                DIRECT ACTIONS ({actionResults.length})
              </span>
              <div className="space-y-1.5">
                {actionResults.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => {
                      onSelectTab(act.targetTab, act.targetSection);
                      if (act.policyId) onOpenPolicy(act.policyId);
                      onClose();
                    }}
                    className="p-3 rounded bg-[#050807] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-[#00FF66]">
                        <span>{act.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{act.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Policy Results */}
          {policyResults.length > 0 && (
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">
                OFFICIAL POLICIES ({policyResults.length})
              </span>
              <div className="space-y-1.5">
                {policyResults.map((pol) => (
                  <div
                    key={pol.id}
                    onClick={() => {
                      onOpenPolicy(pol.id);
                      onClose();
                    }}
                    className="p-3 rounded bg-[#050807] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-[#00FF66]">
                        <FileText className="w-3.5 h-3.5 text-[#00FF66]" />
                        <span>{pol.title}</span>
                        <SourceLabel type="OFFICIAL" />
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Applicability: {pol.applicability} • Owner: {pol.owner}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-[#00FF66] border border-[#00FF66]/30 px-2 py-0.5 rounded bg-[#00FF66]/10">
                      READ POLICY →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Results */}
          {productResults.length > 0 && (
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">
                PRODUCTS & TECHNOLOGY ({productResults.length})
              </span>
              <div className="space-y-1.5">
                {productResults.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectTab('BUSINESS', 'products');
                      onClose();
                    }}
                    className="p-3 rounded bg-[#050807] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-[#00FF66]">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{prod.name}</span>
                        <SourceLabel type="COMPANY CONTEXT" />
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{prod.whatIsIt}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00FF66] transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Glossary Terms Results */}
          {glossaryResults.length > 0 && (
            <div>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">
                GLOSSARY TERMS ({glossaryResults.length})
              </span>
              <div className="space-y-1.5">
                {glossaryResults.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onSelectTab('HELP', 'glossary');
                      onClose();
                    }}
                    className="p-3 rounded bg-[#050807] border border-[#162E21] hover:border-[#00FF66]/50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                      <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                      <span>{g.term}</span>
                      {g.fullForm && <span className="text-slate-400 font-normal">({g.fullForm})</span>}
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{g.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#050807] border-t border-[#162E21] flex items-center justify-between font-mono text-[11px] text-slate-400">
          <span>Search matches across official documents & onboarding guides</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
