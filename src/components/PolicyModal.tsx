import React from 'react';
import type { PolicyDoc } from '../types';
import { X, FileText, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  policy: PolicyDoc | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in font-sans">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-[#E2E4DC] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#343333]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#061210] text-white border-b border-[#14332B] gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 shrink min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#8CFF00] text-[#061210] flex items-center justify-center font-extrabold shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h2 className="text-base sm:text-lg font-extrabold text-white truncate">{policy.title}</h2>
                <span className="px-2 py-0.5 rounded-full bg-[#8CFF00] text-[#061210] text-[9px] sm:text-[10px] font-extrabold uppercase shrink-0">
                  POLICY HIGHLIGHTS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                Version {policy.version} • Rev. {policy.revisionDate} • {policy.fileName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">

          {/* Important Policy Notice Banner */}
          <div className="p-3.5 sm:p-4 bg-[#F4F5F0] border border-[#E2E4DC] rounded-xl text-xs space-y-1">
            <span className="font-extrabold text-[#061210] uppercase tracking-wider block text-[11px] sm:text-xs">
              ● IMPORTANT POLICY NOTICE
            </span>
            <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
              All summaries and cards on this site are provided for orientation and convenience. The official policy document maintained in Esyasoft&apos;s authorised HR systems (Zoho People / Zoho Expense / Zoho Recruit / ICC registry) is the authoritative source of truth.
            </p>
          </div>

          {/* Metadata Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 sm:p-4 bg-[#F4F5F0] border border-[#E2E4DC] rounded-xl text-xs font-sans">
            <div>
              <span className="text-slate-500 font-bold block text-[10px] uppercase">APPLICABILITY:</span>
              <span className="text-[#061210] font-semibold">{policy.applicability}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px] uppercase">POLICY OWNER:</span>
              <span className="text-[#061210] font-semibold">{policy.owner}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block text-[10px] uppercase">PREPARED / APPROVED BY:</span>
              <span className="text-[#061210] font-semibold">
                {policy.preparedBy} / {policy.approvedBy}
              </span>
            </div>
          </div>

          {/* What It Answers */}
          <div className="p-3.5 sm:p-4 bg-white border border-[#E2E4DC] rounded-xl space-y-2 shadow-xs">
            <span className="font-extrabold text-[#061210] text-[11px] sm:text-xs uppercase tracking-wider block">● WHAT IT ANSWERS</span>
            <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
              {policy.whatItAnswers.map((ans, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#061210] font-bold">•</span>
                  <span>{ans}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Highlights */}
          <div className="p-3.5 sm:p-4 bg-white border border-[#E2E4DC] rounded-xl space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-xs text-[#061210]">
              <CheckCircle2 className="w-4 h-4 text-[#061210] shrink-0" />
              <span className="uppercase tracking-wider">KEY POLICY HIGHLIGHTS & RULES</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-800 font-medium">
              {policy.keyThingsToKnow.map((item, idx) => (
                <li key={idx} className="p-2.5 sm:p-3 bg-[#F4F5F0] border border-[#E2E4DC] rounded-xl flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8CFF00] text-[#061210] font-bold flex items-center justify-center shrink-0 text-[10px]">{idx + 1}</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Source Precedence Footer Box */}
          <div className="p-4 bg-[#061210] text-white rounded-xl space-y-3 border border-[#14332B]">
            <div className="space-y-1">
              <span className="text-[#8CFF00] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider block">
                ● OFFICIAL SOURCE PRECEDENCE
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                This page is a practical summary of the applicable company policy. The latest official policy available through Esyasoft&apos;s authorised HR systems takes precedence.
              </p>
            </div>
            <a
              href="https://people.zoho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#8CFF00] text-[#061210] text-xs font-extrabold rounded-lg hover:bg-[#76DA00] transition-colors"
            >
              <span>FIND THIS POLICY IN ZOHO PEOPLE</span>
              <FileText className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 bg-[#F4F5F0] border-t border-[#E2E4DC] text-xs gap-2">
          <span className="text-slate-600 font-mono text-[11px] truncate max-w-full">
            Source File: <code className="text-[#061210] font-bold">docs/{policy.fileName}</code>
          </span>
          <button
            onClick={onClose}
            className="v1-btn-primary px-4 py-1.5 text-xs font-extrabold cursor-pointer w-full sm:w-auto text-center"
          >
            CLOSE HIGHLIGHTS
          </button>
        </div>
      </div>
    </div>
  );
};
