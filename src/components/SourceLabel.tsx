import React from 'react';
import type { ContentSourceType } from '../types';

interface SourceLabelProps {
  type: ContentSourceType;
  className?: string;
  size?: 'sm' | 'md';
}

export const SourceLabel: React.FC<SourceLabelProps> = ({ type, className = '', size = 'sm' }) => {
  const getColors = () => {
    switch (type) {
      case 'OFFICIAL':
        return 'bg-[#00FF66]/10 text-[#00FF66] border-[#00FF66]/30';
      case 'COMPANY CONTEXT':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50';
      case 'ONBOARDING GUIDANCE':
        return 'bg-teal-950/50 text-teal-300 border-teal-800/40';
      case 'PROJECT / ROLE SPECIFIC':
        return 'bg-slate-900/80 text-slate-300 border-slate-700/50';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  const getDotColor = () => {
    switch (type) {
      case 'OFFICIAL':
        return 'bg-[#00FF66] shadow-[0_0_8px_#00FF66]';
      case 'COMPANY CONTEXT':
        return 'bg-emerald-400';
      case 'ONBOARDING GUIDANCE':
        return 'bg-teal-400';
      case 'PROJECT / ROLE SPECIFIC':
        return 'bg-slate-400';
    }
  };

  const pxPy = size === 'md' ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[11px]';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium uppercase tracking-wider rounded border ${getColors()} ${pxPy} ${className}`}
      title={`Source Classification: ${type}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} />
      {type}
    </span>
  );
};
