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
    { id: 'HOW_WE_WORK', label: 'HOW WE WORK' },
    { id: 'FIRST_90', label: 'FIRST 90' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F4F5F0]/90 backdrop-blur-md border-b border-[#E2E4DC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Title */}
          <div
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => onSelectTab('HOME')}
          >
            <img
              src="/assets/esyasoft_brand_logo.png"
              alt="Esyasoft Logo"
              className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-all"
            />
            <span className="text-slate-400 font-light">/</span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#061210] px-2.5 py-0.5 rounded-full bg-[#8CFF00]/25 border border-[#8CFF00]/60">
              FIRST 90
            </span>
          </div>

          {/* Primary Navigation Bar (Exactly 4 destinations) */}
          <nav className="hidden md:flex items-center space-x-2 font-sans text-xs font-extrabold tracking-wider">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#061210] text-[#8CFF00] shadow-xs'
                      : 'text-slate-700 hover:text-[#061210] hover:bg-[#E7E9E0]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Search & Grid Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7E9E0] hover:bg-[#DDE0D4] text-slate-700 transition-all text-xs font-extrabold cursor-pointer"
              title="Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 text-slate-500 rounded font-mono">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={onToggleGridModal}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-extrabold tracking-widest uppercase transition-all cursor-pointer shadow-xs ${
                isGridOpen
                  ? 'bg-[#061210] text-white border border-[#8CFF00]'
                  : 'bg-[#8CFF00] hover:bg-[#76DA00] text-[#061210]'
              }`}
              title="System Energy Grid"
            >
              <Grid className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>GRID</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Scrollbar */}
        <div className="md:hidden flex items-center overflow-x-auto py-2 space-x-1 font-sans text-xs font-extrabold uppercase border-t border-[#E2E4DC] no-scrollbar">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#061210] text-[#8CFF00]'
                    : 'text-slate-700 hover:bg-[#E7E9E0]'
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
