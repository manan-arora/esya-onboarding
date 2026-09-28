import React from 'react';
import type { PolicyDoc } from '../types';
import { SourceLabel } from './SourceLabel';
import { X, FileText, CheckCircle2, Copy, Check } from 'lucide-react';

interface PolicyModalProps {
  policy: PolicyDoc | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!policy) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(policy.contentMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#07110D] border border-[#162E21] rounded-xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050807] border-b border-[#162E21]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold font-mono text-white">{policy.title}</h2>
                <SourceLabel type="OFFICIAL" />
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Version {policy.version} • Rev. {policy.revisionDate} • {policy.fileName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Metadata Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#050807] border border-[#162E21] rounded-lg text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">APPLICABILITY:</span>
              <span className="text-emerald-300 font-medium">{policy.applicability}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">POLICY OWNER:</span>
              <span className="text-emerald-300 font-medium">{policy.owner}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">PREPARED / APPROVED BY:</span>
              <span className="text-emerald-300 font-medium">
                {policy.preparedBy} / {policy.approvedBy}
              </span>
            </div>
          </div>

          {/* Key Things To Know */}
          <div className="p-4 bg-emerald-950/20 border border-[#162E21] rounded-lg space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00FF66]">
              <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
              <span>KEY POLICY HIGHLIGHTS</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {policy.keyThingsToKnow.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00FF66] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Document Content View */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-slate-400 pb-2 border-b border-[#162E21]">
              <span className="font-bold text-white uppercase">OFFICIAL DOCUMENT TEXT</span>
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 text-xs text-[#00FF66] hover:underline"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
            <div className="p-5 bg-[#050807] border border-[#162E21] rounded-lg font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-text">
              {policy.contentMarkdown}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#050807] border-t border-[#162E21] font-mono text-xs">
          <span className="text-slate-400">
            Source File: <code className="text-emerald-400">docs/{policy.fileName}</code>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
