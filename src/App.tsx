import { useState, useEffect } from 'react';
import type { ViewTab, CoreId, VoltCoreStatus } from './types';
import { MISSIONS, CORES } from './data/curriculum';
import { Header } from './components/Header';
import { OverviewView } from './components/OverviewView';
import { TodayView } from './components/TodayView';
import { JourneyView } from './components/JourneyView';
import { GetHubView } from './components/GetHubView';
import { DocsView } from './components/DocsView';
import { VoltView } from './components/VoltView';
import { FinalActivation } from './components/FinalActivation';
import { DemoToolbar } from './components/DemoToolbar';

const STORAGE_KEY_COMPLETED = 'esyasoft_volt_completed_days';
const STORAGE_KEY_CURRENT = 'esyasoft_volt_current_day';

export function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('OVERVIEW');
  
  // Initialize state with default Day 8 demo baseline (Days 1-7 completed) or local storage
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read completed days from localStorage', e);
    }
    return [1, 2, 3, 4, 5, 6, 7]; // Default initial baseline: 7 days done (Power Core 100%, Domain Core 40%)
  });

  const [currentDayNumber, setCurrentDayNumber] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CURRENT);
      if (saved) return Number(saved);
    } catch (e) {
      console.warn('Could not read current day from localStorage', e);
    }
    return 8; // Default initial view: Day 08 / 30
  });

  const [showFinalActivation, setShowFinalActivation] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedDays));
    } catch (e) {
      // ignore
    }
  }, [completedDays]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CURRENT, String(currentDayNumber));
    } catch (e) {
      // ignore
    }
  }, [currentDayNumber]);

  // Overall percentage calculation
  const overallPercentage = Math.round((completedDays.length / 30) * 100);

  // Calculate 5 core statuses dynamically
  const coreIds: CoreId[] = ['POWER', 'DOMAIN', 'NEURAL', 'ENGINE', 'DRIVE'];
  const coreStatuses: VoltCoreStatus[] = coreIds.map((cId) => {
    const coreInfo = CORES[cId];
    const coreMissions = MISSIONS.filter((m) => m.coreId === cId);
    const completedCount = coreMissions.filter((m) => completedDays.includes(m.day)).length;
    const percentage = Math.round((completedCount / coreMissions.length) * 100);

    return {
      id: cId,
      name: coreInfo.name,
      percentage,
      completedDays: completedCount,
      totalDays: coreMissions.length,
      isFullyBuilt: percentage === 100
    };
  });

  // Current day mission object
  const currentMission = MISSIONS.find((m) => m.day === currentDayNumber) || MISSIONS[0];

  // Actions
  const handleToggleCheckpoint = (dayNum: number) => {
    setCompletedDays((prev) => {
      let updated: number[];
      if (prev.includes(dayNum)) {
        updated = prev.filter((d) => d !== dayNum);
      } else {
        updated = [...prev, dayNum].sort((a, b) => a - b);
      }

      // If Day 30 completed (or all 30 days done), trigger final activation moment!
      if (updated.length === 30 || (dayNum === 30 && updated.includes(30))) {
        setTimeout(() => {
          setShowFinalActivation(true);
        }, 500);
      }
      return updated;
    });
  };

  const handleSelectDay = (dayNum: number) => {
    setCurrentDayNumber(dayNum);
    setActiveTab('TODAY');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteAll = () => {
    const allDays = Array.from({ length: 30 }, (_, i) => i + 1);
    setCompletedDays(allDays);
    setCurrentDayNumber(30);
    setShowFinalActivation(true);
  };

  const handleResetDemo = () => {
    setCompletedDays([1, 2, 3, 4, 5, 6, 7]);
    setCurrentDayNumber(8);
    setShowFinalActivation(false);
    setActiveTab('OVERVIEW');
  };

  return (
    <div className="min-h-screen bg-[#020605] text-[#F5F5F0] font-sans antialiased relative">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        overallPercentage={overallPercentage}
      />

      {/* Main Page View Switcher */}
      <main>
        {activeTab === 'OVERVIEW' && (
          <OverviewView
            onStartJourney={() => {
              setActiveTab('JOURNEY');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeTab === 'JOURNEY' && (
          <JourneyView
            missions={MISSIONS}
            completedDays={completedDays}
            currentDay={currentDayNumber}
            onSelectDay={handleSelectDay}
            onToggleCheckpoint={handleToggleCheckpoint}
            onExploreVolt={() => {
              setActiveTab('VOLT');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            overallPercentage={overallPercentage}
          />
        )}

        {activeTab === 'TODAY' && (
          <TodayView
            currentDayMission={currentMission}
            allMissions={MISSIONS}
            completedDays={completedDays}
            onCompleteCheckpoint={handleToggleCheckpoint}
            onSelectDay={handleSelectDay}
            overallPercentage={overallPercentage}
          />
        )}

        {activeTab === 'GET_HUB' && (
          <GetHubView
            onGoToJourney={() => {
              setActiveTab('JOURNEY');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'DOCS' && (
          <DocsView />
        )}

        {activeTab === 'VOLT' && (
          <VoltView
            overallPercentage={overallPercentage}
            coreStatuses={coreStatuses}
            onTriggerActivation={() => setShowFinalActivation(true)}
            completedDaysCount={completedDays.length}
          />
        )}
      </main>

      {/* Final Volt Activation Overlay */}
      {showFinalActivation && (
        <FinalActivation
          onRevisitJourney={() => {
            setShowFinalActivation(false);
            setActiveTab('JOURNEY');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onClose={() => setShowFinalActivation(false)}
        />
      )}

      {/* Demo Floating Controls */}
      <DemoToolbar
        onSelectDay={handleSelectDay}
        onCompleteAllDays={handleCompleteAll}
        onResetDemo={handleResetDemo}
        currentDay={currentDayNumber}
        completedCount={completedDays.length}
      />

      {/* Footer */}
      <footer className="py-8 border-t border-[#071B18] bg-[#020605] text-xs font-mono text-neutral-500 text-center space-y-2">
        <p>ESYASOFT GRADUATE ENGINEER TRAINEE PROGRAM 2026 • BUILD VOLT</p>
        <p className="text-[10px] text-neutral-600">
          Concept Prototype • Designed for Esyasoft GET Onboarding Experience
        </p>
      </footer>
    </div>
  );
}
export default App;
