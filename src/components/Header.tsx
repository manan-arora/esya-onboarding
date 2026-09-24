import { useState } from 'react';
import type { ViewTab } from '../types';
import { Cpu, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: ViewTab;
  setActiveTab: (tab: ViewTab) => void;
  overallPercentage: number;
}

export const Header = ({
  activeTab,
  setActiveTab,
  overallPercentage
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkBg = activeTab === 'VOLT' || activeTab === 'JOURNEY';

  const handleTabClick = (tab: ViewTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const navTabs: ViewTab[] = ['OVERVIEW', 'JOURNEY', 'TODAY', 'GET_HUB', 'DOCS', 'VOLT'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md border-b ${
      isDarkBg 
        ? 'bg-[#020605]/85 border-[#071B18]/80 text-[#F5F5F0]' 
        : 'bg-[#F5F5F0]/90 border-slate-200/80 text-[#061513]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <button 
          onClick={() => handleTabClick('OVERVIEW')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left transition-transform active:scale-95 cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#8CFF00]/40 flex items-center justify-center relative shadow-[0_0_12px_rgba(140,255,0,0.2)] group-hover:border-[#8CFF00] transition-colors">
            <img src="/assets/esyasoft_logo.png" alt="Esyasoft Logo" className="w-full h-full object-cover" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#8CFF00] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase leading-none font-sans">
              ESYASOFT
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest font-mono text-[#8CFF00] font-semibold mt-0.5">
              GET 2026
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === 'GET_HUB' ? 'ESYALIFE' : tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wider font-mono transition-all duration-200 rounded-md cursor-pointer ${
                  isActive
                    ? isDarkBg
                      ? 'text-[#8CFF00]'
                      : 'text-[#061513] font-bold'
                    : isDarkBg
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
                }`}
              >
                {label}
                {isActive && (
                  <span className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all ${
                    isDarkBg ? 'bg-[#8CFF00] shadow-[0_0_8px_#8CFF00]' : 'bg-[#061513]'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Volt Progress Badge */}
          <button
            onClick={() => handleTabClick('VOLT')}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono border transition-all duration-300 ${
              isDarkBg
                ? 'bg-[#071B18] border-[#8CFF00]/30 hover:border-[#8CFF00] text-white'
                : 'bg-white border-slate-200 hover:border-[#8CFF00] text-[#061513] shadow-sm'
            }`}
            title="View Volt mascot build progress"
          >
            <Cpu className="w-3.5 h-3.5 text-[#8CFF00]" />
            <span className="font-semibold">{overallPercentage}% <span className="hidden sm:inline">BUILT</span></span>
            <span className={`w-2 h-2 rounded-full ${overallPercentage === 100 ? 'bg-emerald-400' : 'bg-[#8CFF00] animate-ping'}`} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border transition cursor-pointer ${
              isDarkBg
                ? 'bg-[#071B18] border-[#13332D] text-white hover:border-[#8CFF00]/50'
                : 'bg-white border-slate-200 text-[#061513] hover:bg-slate-50'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#8CFF00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-4 space-y-2 backdrop-blur-xl ${
          isDarkBg 
            ? 'bg-[#020605]/95 border-[#071B18] text-white' 
            : 'bg-white/95 border-slate-200 text-[#061513]'
        }`}>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab;
              const label = tab === 'GET_HUB' ? 'ESYALIFE' : tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`p-3 rounded-xl font-bold transition text-left flex items-center justify-between ${
                    isActive
                      ? isDarkBg
                        ? 'bg-[#071B18] text-[#8CFF00] border border-[#8CFF00]/40'
                        : 'bg-[#061513] text-[#8CFF00]'
                      : isDarkBg
                        ? 'bg-neutral-900/60 text-neutral-300 hover:text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8CFF00]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
