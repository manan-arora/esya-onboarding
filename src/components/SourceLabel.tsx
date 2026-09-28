import React from 'react';
import type { ContentSourceType } from '../types';

interface SourceLabelProps {
  type: ContentSourceType;
  className?: string;
  size?: 'sm' | 'md';
  darkBg?: boolean;
}

export const SourceLabel: React.FC<SourceLabelProps> = ({
  type,
  className = '',
  size = 'sm',
  darkBg = false
}) => {
  const getColors = () => {
    if (darkBg) {
      switch (type) {
        case 'OFFICIAL':
          return 'bg-[#7F9B3C]/20 text-[#9AC647] border-[#7F9B3C]/50';
        case 'COMPANY CONTEXT':
          return 'bg-blue-950/60 text-blue-200 border-blue-800/50';
        case 'ONBOARDING GUIDANCE':
          return 'bg-teal-950/50 text-teal-200 border-teal-800/40';
        case 'PROJECT / ROLE SPECIFIC':
          return 'bg-slate-900/80 text-slate-300 border-slate-700/50';
        default:
          return 'bg-slate-900 text-slate-400 border-slate-800';
      }
    } else {
      switch (type) {
        case 'OFFICIAL':
          return 'bg-[#7F9B3C]/10 text-[#4D631F] border-[#7F9B3C]/30';
        case 'COMPANY CONTEXT':
          return 'bg-[#17162E]/08 text-[#17162E] border-[#17162E]/20';
        case 'ONBOARDING GUIDANCE':
          return 'bg-teal-50 text-teal-800 border-teal-200';
        case 'PROJECT / ROLE SPECIFIC':
          return 'bg-stone-100 text-stone-700 border-stone-300';
        default:
          return 'bg-stone-100 text-stone-600 border-stone-200';
      }
    }
  };

  const getDotColor = () => {
    switch (type) {
      case 'OFFICIAL':
        return 'bg-[#7F9B3C]';
      case 'COMPANY CONTEXT':
        return 'bg-[#17162E]';
      case 'ONBOARDING GUIDANCE':
        return 'bg-teal-600';
      case 'PROJECT / ROLE SPECIFIC':
        return 'bg-stone-500';
    }
  };

  const pxPy = size === 'md' ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[11px]';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-semibold tracking-wider rounded border ${getColors()} ${pxPy} ${className}`}
      title={`Classification: ${type}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`} />
      {type}
    </span>
  );
};
