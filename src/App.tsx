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
import { BusinessView } from './components/BusinessView';
import { HowWeWorkView } from './components/HowWeWorkView';
import { WorkplaceView } from './components/WorkplaceView';
import { First90View } from './components/First90View';
import { HelpView } from './components/HelpView';
import { X, Zap, ArrowUp } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('HOME');
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined);
  const [activePolicyId, setActivePolicyId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll to top on tab change & track scroll for button
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
    <div className="min-h-screen bg-[#050807] text-[#F8FAF9] flex flex-col font-sans selection:bg-[#00FF66] selection:text-[#050807]">
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
        {currentTab === 'BUSINESS' && (
          <BusinessView
            onSelectTab={handleSelectTab}
            initialSection={activeSection}
          />
        )}
        {currentTab === 'HOW_WE_WORK' && (
          <HowWeWorkView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
          />
        )}
        {currentTab === 'WORKPLACE' && (
          <WorkplaceView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
            initialSection={activeSection}
          />
        )}
        {currentTab === 'FIRST_90' && (
          <First90View onSelectTab={handleSelectTab} />
        )}
        {currentTab === 'HELP' && (
          <HelpView
            onSelectTab={handleSelectTab}
            onOpenPolicy={(id) => setActivePolicyId(id)}
            onOpenSearch={() => setIsSearchOpen(true)}
            initialSection={activeSection}
          />
        )}
      </main>

      {/* Persistent GRID Modal Drawer Overlay */}
      {isGridModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-5xl bg-[#07110D] border border-[#162E21] rounded-2xl shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#162E21] pb-3">
              <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                <Zap className="w-4 h-4 text-[#00FF66]" />
                <span>ESYASOFT SYSTEM ENERGY GRID</span>
              </div>
              <button
                onClick={() => setIsGridModalOpen(false)}
                className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <EsyasoftGrid
              onNavigateNode={(tab, section) => handleSelectTab(tab, section)}
              selectedNodeId="you"
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
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#07110D] border border-[#00FF66]/50 text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:bg-[#00FF66] hover:text-[#050807] transition-all"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-[#050807] border-t border-[#162E21] py-8 text-slate-400 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-white font-bold">
              <span>ESYASOFT</span>
              <span className="text-[#00FF66]">/</span>
              <span className="text-[#00FF66]">FIRST 90</span>
            </div>
            <p className="text-[11px] text-slate-500 font-sans mt-0.5">
              Digital First 90 Days Employee Orientation & Reference Guide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => handleSelectTab('START_HERE')} className="hover:text-white">Start Here</button>
            <button onClick={() => handleSelectTab('WORKPLACE', 'policies')} className="hover:text-white">Policy Library</button>
            <button onClick={() => handleSelectTab('BUSINESS')} className="hover:text-white">Energy System</button>
            <button onClick={() => handleSelectTab('HELP')} className="hover:text-white">Help & Support</button>
          </div>

          <div className="text-right text-[10px] text-slate-500">
            © 2026 Esyasoft Technologies Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
