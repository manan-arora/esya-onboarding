import { useState, useEffect } from 'react';
import type { ViewTab, VoltCoreId, VoltCoreStatus } from './types';
import { MISSIONS, VOLT_CORES } from './data/curriculum';
import { calculateAutomaticProgramDay } from './utils/dateUtils';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { JourneyView } from './components/JourneyView';
import { GetGuideView } from './components/GetGuideView';
import { VoltView } from './components/VoltView';
import { FinalActivation } from './components/FinalActivation';
import { DemoToolbar } from './components/DemoToolbar';

const STORAGE_KEY_COMPLETED = 'esyasoft_volt_completed_days_90';
const STORAGE_KEY_DEMO_OVERRIDE = 'esyasoft_volt_demo_override_day';

export function App() {
  const [activeTab, setActiveTab] = useState<ViewTab>('HOME');

  const automaticDay = calculateAutomaticProgramDay();

  // Default baseline completed days (Day 1 to 23 completed)
  const defaultCompletedDays = Array.from({ length: 23 }, (_, i) => i + 1);

  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read completed days from localStorage', e);
    }
    return defaultCompletedDays;
  });

  const [demoOverrideDay, setDemoOverrideDay] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DEMO_OVERRIDE);
      if (saved !== null) return Number(saved);
    } catch (e) {
      console.warn('Could not read demo override day from localStorage', e);
    }
    return 23; // Default demo initial view: Day 23 of 90
  });

  const [showFinalActivation, setShowFinalActivation] = useState(false);

  // Active current day (Demo override takes precedence over automatic date)
  const isDemoOverride = demoOverrideDay !== null;
  const currentDayNumber = isDemoOverride ? demoOverrideDay : automaticDay;

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedDays));
    } catch (e) {
      // ignore
    }
  }, [completedDays]);

  useEffect(() => {
    try {
      if (demoOverrideDay !== null) {
        localStorage.setItem(STORAGE_KEY_DEMO_OVERRIDE, String(demoOverrideDay));
      } else {
        localStorage.removeItem(STORAGE_KEY_DEMO_OVERRIDE);
      }
    } catch (e) {
      // ignore
    }
  }, [demoOverrideDay]);

  // Overall percentage calculation out of 90 days
  const overallPercentage = Math.round((completedDays.length / 90) * 100);

  // Calculate 5 Volt Core statuses dynamically
  const voltCoreIds: VoltCoreId[] = ['POWER', 'DOMAIN', 'NEURAL', 'ENGINE', 'DRIVE'];
  const voltCoreStatuses: VoltCoreStatus[] = voltCoreIds.map((coreId) => {
    const coreInfo = VOLT_CORES[coreId];
    const coreMissions = MISSIONS.filter((m) => m.day >= coreInfo.dayStart && m.day <= coreInfo.dayEnd);
    const completedCount = coreMissions.filter((m) => completedDays.includes(m.day)).length;
    const percentage = Math.round((completedCount / coreMissions.length) * 100);

    const isComplete = percentage === 100;
    const isInProgress = !isComplete && (completedCount > 0 || (currentDayNumber >= coreInfo.dayStart && currentDayNumber <= coreInfo.dayEnd));
    const isLocked = !isComplete && !isInProgress;

    return {
      id: coreId,
      name: coreInfo.name,
      percentage,
      completedDays: completedCount,
      totalDays: coreMissions.length,
      isFullyBuilt: isComplete,
      isLocked,
      isInProgress,
      isComplete
    };
  });

  // Current day mission object
  const currentMission = MISSIONS.find((m) => m.day === currentDayNumber) || MISSIONS[0];

  // Action handlers
  const handleToggleCheckpoint = (dayNum: number) => {
    setCompletedDays((prev) => {
      let updated: number[];
      if (prev.includes(dayNum)) {
        updated = prev.filter((d) => d !== dayNum);
      } else {
        updated = [...prev, dayNum].sort((a, b) => a - b);
      }

      if (updated.length === 90 || (dayNum === 90 && updated.includes(90))) {
        setTimeout(() => {
          setShowFinalActivation(true);
        }, 500);
      }
      return updated;
    });
  };

  const handleSelectDay = (dayNum: number) => {
    setDemoOverrideDay(dayNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetToToday = () => {
    setDemoOverrideDay(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteAll = () => {
    const allDays = Array.from({ length: 90 }, (_, i) => i + 1);
    setCompletedDays(allDays);
    setDemoOverrideDay(90);
    setShowFinalActivation(true);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#020605] text-[#F5F5F0] font-sans antialiased relative">
      
      {/* Primary Top Header Navigation (4 Destinations ONLY: HOME, 90-DAY JOURNEY, GET GUIDE, VOLT) */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        overallPercentage={overallPercentage}
      />

      {/* Main View Router */}
      <main>
        {activeTab === 'HOME' && (
          <HomeView
            currentDayNumber={currentDayNumber}
            completedDays={completedDays}
            overallPercentage={overallPercentage}
            currentMission={currentMission}
            onGoToJourney={() => {
              setActiveTab('JOURNEY');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToVolt={() => {
              setActiveTab('VOLT');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onToggleCheckpoint={handleToggleCheckpoint}
          />
        )}

        {activeTab === 'JOURNEY' && (
          <JourneyView
            missions={MISSIONS}
            completedDays={completedDays}
            currentDay={currentDayNumber}
            onSelectDay={handleSelectDay}
            onExploreVolt={() => {
              setActiveTab('VOLT');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            overallPercentage={overallPercentage}
            onToggleCheckpoint={handleToggleCheckpoint}
          />
        )}

        {activeTab === 'GUIDE' && (
          <GetGuideView />
        )}

        {activeTab === 'VOLT' && (
          <VoltView
            overallPercentage={overallPercentage}
            coreStatuses={voltCoreStatuses}
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

      {/* Demo Floating Control Toolbar */}
      <DemoToolbar
        currentDay={currentDayNumber}
        automaticDay={automaticDay}
        isDemoOverride={isDemoOverride}
        onSelectDay={handleSelectDay}
        onResetToToday={handleResetToToday}
        completedCount={completedDays.length}
        onCompleteAllDays={handleCompleteAll}
      />

      {/* Footer */}
      <footer className="py-8 border-t border-[#071B18] bg-[#020605] text-xs font-mono text-neutral-500 text-center space-y-2">
        <p className="text-neutral-400 font-semibold">ESYASOFT GRADUATE ENGINEER TRAINEE PROGRAM • 90-DAY JOURNEY</p>
        <p className="text-[10px] text-neutral-600">
          Official GET Onboarding & Development Program • Esyasoft Technologies
        </p>
      </footer>
    </div>
  );
}

export default App;
