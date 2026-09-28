import { useState, useEffect } from 'react';
import type { ViewTab } from './types';
import { POLICIES_DATA } from './data/policiesData';
import { Header } from './components/Header';
import { PolicyModal } from './components/PolicyModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { EsyasoftGrid } from './components/EsyasoftGrid';
import { HomeView } from './components/HomeView';
import { StartHereView } from './components/StartHereView';
import { CompanyView } from './components/CompanyView';
import { HowWeWorkView } from './components/HowWeWorkView';
import { First90View } from './components/First90View';
import { X, Zap, ArrowUp } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('HOME');
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined);
  const [activePolicyId, setActivePolicyId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: ViewTab, sectionId?: string) => {
    setCurrentTab(tab);
    setActiveSection(sectionId);
    setIsGridModalOpen(false);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const activePolicyDoc = POLICIES_DATA.find((p) => p.id === activePolicyId) || null;

  return (
    <div className="min-h-screen bg-[#F4F5F0] text-[#061210] flex flex-col font-sans selection:bg-[#8CFF00] selection:text-[#061210]">
      
      {/* Top Global Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleGridModal={() => setIsGridModalOpen((prev) => !prev)}
        isGridOpen={isGridModalOpen}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'HOME' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
          />
        )}
        {currentTab === 'START_HERE' && (
          <StartHereView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
          />
        )}
        {currentTab === 'ESYASOFT' && (
          <CompanyView onSelectTab={handleSelectTab} />
        )}
        {currentTab === 'HOW_WE_WORK' && (
          <HowWeWorkView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
          />
        )}
        {currentTab === 'FIRST_90' && (
          <First90View onSelectTab={handleSelectTab} />
        )}
      </main>

      {/* Persistent GRID Modal Overlay */}
      {isGridModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans overflow-y-auto"
          onClick={() => setIsGridModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#061210] text-white border border-[#14332B] rounded-3xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button positioned neatly at top right */}
            <button
              onClick={() => setIsGridModalOpen(false)}
              className="absolute top-3.5 right-4 z-30 p-2 rounded-full bg-[#0B1C18] border border-[#14332B] text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer shadow-md"
              title="Close Grid Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <EsyasoftGrid
              onNavigateNode={(tab, section) => handleSelectTab(tab, section)}
              selectedNodeId="you"
              darkTheme={true}
              integrated={false}
            />
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={handleSelectTab}
        onOpenPolicy={(id) => setActivePolicyId(id)}
      />

      {/* Official Policy Viewer Modal */}
      <PolicyModal
        policy={activePolicyDoc}
        onClose={() => setActivePolicyId(null)}
      />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#061210] border border-[#8CFF00] text-[#8CFF00] shadow-xl hover:bg-[#8CFF00] hover:text-[#061210] transition-all cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-[#061210] border-t border-[#14332B] text-white py-12 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-extrabold text-sm tracking-wider">
                <span>ESYASOFT</span>
                <span className="text-[#8CFF00]">/</span>
                <span className="text-[#8CFF00]">FIRST 90</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                A practical guide for finding your feet, understanding the company and getting comfortable with the way we work.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-slate-300 uppercase tracking-wider">
              <button onClick={() => handleSelectTab('START_HERE')} className="hover:text-[#8CFF00] cursor-pointer">Start Here</button>
              <button onClick={() => handleSelectTab('ESYASOFT')} className="hover:text-[#8CFF00] cursor-pointer">Esyasoft</button>
              <button onClick={() => handleSelectTab('HOW_WE_WORK')} className="hover:text-[#8CFF00] cursor-pointer">How We Work</button>
              <button onClick={() => handleSelectTab('FIRST_90')} className="hover:text-[#8CFF00] cursor-pointer">First 90</button>
              <button onClick={() => setIsSearchOpen(true)} className="hover:text-[#8CFF00] cursor-pointer">Search</button>
              <button onClick={() => handleSelectTab('HOW_WE_WORK', 'policy-library')} className="hover:text-[#8CFF00] cursor-pointer">Official Policies</button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#14332B] flex flex-col sm:flex-row justify-between gap-4 text-slate-400 text-[11px] leading-relaxed">
            <p className="max-w-2xl">
              <strong className="text-white block mb-0.5">A NOTE ON THIS GUIDE</strong>
              This guide is an onboarding aid. Official policies, employment documents, security requirements, manager instructions and current company communications take precedence where they differ from this guide.
            </p>

            <div className="sm:text-right font-mono text-slate-500">
              © 2026 Esyasoft Technologies Pvt. Ltd. All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
