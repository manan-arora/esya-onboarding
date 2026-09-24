import type { ViewTab } from '../types';
import { Cpu } from 'lucide-react';

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
  const isDarkBg = activeTab === 'VOLT' || activeTab === 'JOURNEY';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md border-b ${
      isDarkBg 
        ? 'bg-[#020605]/80 border-[#071B18]/80 text-[#F5F5F0]' 
        : 'bg-[#F5F5F0]/90 border-slate-200/80 text-[#061513]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <button 
          onClick={() => setActiveTab('OVERVIEW')}
          className="flex items-center gap-3 group text-left transition-transform active:scale-95 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#8CFF00]/40 flex items-center justify-center relative shadow-[0_0_12px_rgba(140,255,0,0.2)] group-hover:border-[#8CFF00] transition-colors">
            <img src="/assets/esyasoft_logo.png" alt="Esyasoft Logo" className="w-full h-full object-cover" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#8CFF00] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider uppercase leading-none font-sans">
              ESYASOFT
            </span>
            <span className="text-[10px] tracking-widest font-mono text-[#8CFF00] font-semibold mt-0.5">
              GET 2026
            </span>
          </div>
        </button>

        {/* Center: Main Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {(['OVERVIEW', 'JOURNEY', 'TODAY', 'GET_HUB', 'DOCS', 'VOLT'] as ViewTab[]).map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === 'GET_HUB' ? 'ESYALIFE' : tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider font-mono transition-all duration-200 rounded-md cursor-pointer ${
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
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all ${
                    isDarkBg ? 'bg-[#8CFF00] shadow-[0_0_8px_#8CFF00]' : 'bg-[#061513]'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Volt Status Indicator */}
        <button
          onClick={() => setActiveTab('VOLT')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 ${
            isDarkBg
              ? 'bg-[#071B18] border-[#8CFF00]/30 hover:border-[#8CFF00] text-white'
              : 'bg-white border-slate-200 hover:border-[#8CFF00] text-[#061513] shadow-sm'
          }`}
          title="View Volt mascot build progress"
        >
          <Cpu className="w-3.5 h-3.5 text-[#8CFF00]" />
          <span className="font-semibold">{overallPercentage}% BUILT</span>
          <span className={`w-2 h-2 rounded-full ${overallPercentage === 100 ? 'bg-emerald-400' : 'bg-[#8CFF00] animate-ping'}`} />
        </button>

      </div>
    </header>
  );
};
