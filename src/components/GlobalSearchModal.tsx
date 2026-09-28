import React, { useState, useEffect } from 'react';
import type { ViewTab } from '../types';
import { POLICIES_DATA } from '../data/policiesData';
import { PRODUCT_LIBRARY } from '../data/businessData';
import { GLOSSARY_TERMS, ACTION_PATHWAYS } from '../data/helpData';
import { SourceLabel } from './SourceLabel';
import { Search, X, ArrowRight, FileText, Cpu, Compass } from 'lucide-react';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
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

  const hasResults =
    policyResults.length > 0 ||
    productResults.length > 0 ||
    glossaryResults.length > 0 ||
    actionResults.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-md font-sans">
      <div
        className="relative w-full max-w-3xl bg-white border border-[#E2E4DC] rounded-3xl shadow-2xl overflow-hidden text-[#061210] flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-6 py-4 bg-[#061210] text-white border-b border-[#14332B]">
          <Search className="w-5 h-5 text-[#8CFF00] mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search policies, products, leave, travel, per diem, BESS, HRMS, POSH..."
            className="flex-1 bg-transparent text-white font-sans text-sm focus:outline-none placeholder-slate-400 font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-300 hover:text-white text-xs font-sans mr-2 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white bg-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!q && (
            <div className="py-8 text-center text-slate-500 text-xs space-y-3">
              <Compass className="w-10 h-10 text-[#061210] mx-auto opacity-70" />
              <p className="font-medium text-slate-700">Type keywords to search across Esyasoft policies, guides, products, & glossary.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 font-bold">
                {['leave', 'POSH', 'travel', 'BESS', 'MDMS', 'HRMS', 'performance'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-[#F4F5F0] border border-[#E2E4DC] text-[#061210] hover:border-[#061210] text-xs cursor-pointer"
                  >
                    "{term}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="py-8 text-center text-slate-500 text-xs font-medium">
              No matching records found for "{query}". Try checking policies or glossary terms.
            </div>
          )}

          {/* Action Pathways */}
          {actionResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">
                DIRECT ACTIONS ({actionResults.length})
              </span>
              <div className="space-y-2">
                {actionResults.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => {
                      onSelectTab(act.targetTab, act.targetSection);
                      if (act.policyId) onOpenPolicy(act.policyId);
                      onClose();
                    }}
                    className="p-4 rounded-2xl bg-[#F4F5F0] border border-[#E2E4DC] hover:border-[#061210] cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-[#061210] group-hover:text-emerald-700">
                        <span>{act.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{act.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#061210] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Policy Results */}
          {policyResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">
                OFFICIAL POLICIES ({policyResults.length})
              </span>
              <div className="space-y-2">
                {policyResults.map((pol) => (
                  <div
                    key={pol.id}
                    onClick={() => {
                      onOpenPolicy(pol.id);
                      onClose();
                    }}
                    className="p-4 rounded-2xl bg-[#F4F5F0] border border-[#E2E4DC] hover:border-[#061210] cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-[#061210] group-hover:text-emerald-700">
                        <FileText className="w-4 h-4 text-[#061210]" />
                        <span>{pol.title}</span>
                        <SourceLabel type="OFFICIAL" />
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Applicability: {pol.applicability} • Owner: {pol.owner}
                      </p>
                    </div>
                    <span className="text-[11px] font-extrabold text-[#061210] border border-[#061210]/30 px-3 py-1 rounded-full bg-white">
                      READ POLICY →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Results */}
          {productResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">
                PRODUCTS & TECHNOLOGY ({productResults.length})
              </span>
              <div className="space-y-2">
                {productResults.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectTab('ESYASOFT', 'business-areas');
                      onClose();
                    }}
                    className="p-4 rounded-2xl bg-[#F4F5F0] border border-[#E2E4DC] hover:border-[#061210] cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-[#061210] group-hover:text-emerald-700">
                        <Cpu className="w-4 h-4 text-[#061210]" />
                        <span>{prod.name}</span>
                        <SourceLabel type="COMPANY CONTEXT" />
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{prod.whatIsIt}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#061210] transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F4F5F0] border-t border-[#E2E4DC] flex items-center justify-between text-[11px] text-slate-500 font-bold">
          <span>Search matches across official documents & onboarding guides</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
