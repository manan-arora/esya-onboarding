import React from 'react';
import type { ViewTab } from '../types';
import { Search, Grid } from 'lucide-react';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab, sectionId?: string) => void;
  onOpenSearch: () => void;
  onToggleGridModal: () => void;
  isGridOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onToggleGridModal,
  isGridOpen = false
}) => {
  const navItems: { id: ViewTab; label: string }[] = [
    { id: 'START_HERE', label: 'START HERE' },
    { id: 'ESYASOFT', label: 'ESYASOFT' },
    { id: 'BUSINESS', label: 'BUSINESS' },
    { id: 'HOW_WE_WORK', label: 'HOW WE WORK' },
    { id: 'WORKPLACE', label: 'WORKPLACE' },
    { id: 'FIRST_90', label: 'FIRST 90' },
    { id: 'HELP', label: 'HELP' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050807]/90 backdrop-blur-md border-b border-[#162E21] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectTab('HOME')}>
            <div className="w-8 h-8 rounded border border-[#00FF66]/40 bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66] font-mono font-bold text-sm group-hover:bg-[#00FF66]/20 transition-all shadow-[0_0_12px_rgba(0,255,102,0.15)]">
              E90
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-white tracking-wider">
                <span>ESYASOFT</span>
                <span className="text-[#00FF66] font-normal">/</span>
                <span className="text-[#00FF66]">FIRST 90</span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans tracking-wide">Find your place in the system</p>
            </div>
          </div>

          {/* Primary Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-2 rounded transition-all duration-150 ${
                    isActive
                      ? 'bg-[#00FF66]/15 text-[#00FF66] border border-[#00FF66]/30 shadow-[0_0_10px_rgba(0,255,102,0.1)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-950/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Actions */}
          <div className="flex items-center gap-2">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950/40 border border-[#162E21] hover:border-[#00FF66]/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
              title="Global Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#00FF66] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-black/50 border border-slate-700 text-slate-400 rounded">
                Ctrl K
              </kbd>
            </button>

            {/* Persistent Grid Overlay Control */}
            <button
              onClick={onToggleGridModal}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs border transition-all ${
                isGridOpen
                  ? 'bg-[#00FF66] text-[#050807] border-[#00FF66] font-bold shadow-[0_0_15px_rgba(0,255,102,0.4)]'
                  : 'bg-emerald-950/30 text-[#00FF66] border-[#00FF66]/30 hover:bg-[#00FF66]/10'
              }`}
              title="Toggle System Energy Grid"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center overflow-x-auto py-2 space-x-1 font-mono text-[11px] border-t border-[#162E21]/60 no-scrollbar">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-2.5 py-1 rounded whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
