import { useState } from 'react';
import type { VoltCoreId, VoltCoreStatus } from '../types';
import { VOLT_CORES } from '../data/curriculum';
import { Cpu, Zap, CheckCircle2, Lock, Sparkles, RefreshCw, ShieldCheck, Trophy } from 'lucide-react';

interface VoltViewProps {
  overallPercentage: number;
  coreStatuses: VoltCoreStatus[];
  onTriggerActivation?: () => void;
  completedDaysCount: number;
}

export const VoltView: React.FC<VoltViewProps> = ({
  overallPercentage,
  coreStatuses,
  onTriggerActivation,
  completedDaysCount
}) => {
  const [selectedCoreId, setSelectedCoreId] = useState<VoltCoreId | null>('DOMAIN');
  const [isExplodedMode, setIsExplodedMode] = useState<boolean>(true);
  const [completedChallenges, setCompletedChallenges] = useState<Record<VoltCoreId, boolean>>({
    POWER: true,
    DOMAIN: false,
    NEURAL: false,
    ENGINE: false,
    DRIVE: false,
  });

  const selectedCoreStatus = coreStatuses.find(c => c.id === selectedCoreId);
  const selectedCoreInfo = selectedCoreId ? VOLT_CORES[selectedCoreId] : undefined;

  const toggleChallenge = (id: VoltCoreId) => {
    setCompletedChallenges(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Coordinates for exploded mascot overlays
  const corePositions: Record<VoltCoreId, { top: string; left: string }> = {
    POWER: { top: '15%', left: '50%' },
    DOMAIN: { top: '38%', left: '26%' },
    NEURAL: { top: '38%', left: '74%' },
    ENGINE: { top: '76%', left: '30%' },
    DRIVE: { top: '78%', left: '70%' }
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 bg-[#020605] text-[#F5F5F0] relative overflow-hidden font-sans">
      {/* Immersive background glow & grid lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8CFF00]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#071B18_1px,transparent_1px),linear-gradient(to_bottom,#071B18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-[1320px] mx-auto space-y-10 z-10 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#071B18]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B18] border border-[#8CFF00]/30 text-xs font-mono tracking-widest text-[#8CFF00] uppercase shadow-[0_0_15px_rgba(140,255,0,0.15)]">
              <Cpu className="w-4 h-4 text-[#8CFF00]" />
              GAMIFIED PERSONAL PROGRESS LAYER
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
              BUILD YOUR VOLT
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl">
              Your progress through the GET 90-day journey, represented visually. Each completed phase activates a core inside Volt.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExplodedMode(!isExplodedMode)}
              className="px-4 py-2.5 rounded-xl bg-[#071B18] border border-[#13332D] hover:border-[#8CFF00]/50 text-xs font-mono font-semibold text-neutral-300 flex items-center gap-2 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#8CFF00]" />
              {isExplodedMode ? 'STANDALONE VOLT' : 'EXPLODED CORE VIEW'}
            </button>

            {completedDaysCount >= 90 && (
              <button
                onClick={onTriggerActivation}
                className="px-6 py-2.5 rounded-xl bg-[#8CFF00] text-[#020605] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(140,255,0,0.4)] hover:bg-[#9CFF00] transition cursor-pointer animate-pulse"
              >
                <Sparkles className="w-4 h-4" />
                VOLT FULLY ACTIVATED
              </button>
            )}
          </div>
        </div>

        {/* 5-Second Focal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Overall Progress & 5 Volt Cores */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Focal Progress Hero Card */}
            <div className="p-6 rounded-3xl bg-[#061513]/90 border border-[#8CFF00]/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[#13332D] pb-3 mb-6">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                  OVERALL PROGRESS
                </span>
                <span className="text-xs font-mono font-bold text-[#8CFF00]">
                  DAY {completedDaysCount} OF 90
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-full border-4 border-[#071B18] border-t-[#8CFF00] border-r-[#8CFF00] flex flex-col items-center justify-center shrink-0 shadow-[0_0_25px_rgba(140,255,0,0.2)]">
                  <span className="text-3xl font-extrabold font-mono text-white text-glow-lime">
                    {overallPercentage}%
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                    BUILT
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white">
                    Volt Status
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {overallPercentage === 100 
                      ? 'Volt is 100% operational! You have completed the entire 90-day GET journey.' 
                      : `Volt is currently ${overallPercentage}% constructed. Keep progressing through your 90-day missions to power all 5 Cores.`}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 Cores Progression List */}
            <div className="bg-[#061513]/90 p-6 rounded-3xl border border-[#071B18] shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-[#13332D] pb-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                  FIVE VOLT CORES
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  CLICK TO INSPECT
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {coreStatuses.map((core) => {
                  const isSelected = selectedCoreId === core.id;
                  const isCompleted = core.isComplete;
                  const isInProgress = core.isInProgress;

                  return (
                    <button
                      key={core.id}
                      onClick={() => setSelectedCoreId(core.id)}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                        isSelected
                          ? 'bg-[#071B18] border-[#8CFF00] shadow-[0_0_20px_rgba(140,255,0,0.15)]'
                          : 'bg-[#061513] border-[#13332D] hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                          isCompleted
                            ? 'bg-[#8CFF00]/20 text-[#8CFF00] border border-[#8CFF00]/40'
                            : isInProgress
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                        }`}>
                          {core.id.substring(0, 1)}
                        </div>
                        <div className="truncate">
                          <div className={`font-mono text-xs font-bold ${isSelected ? 'text-[#8CFF00]' : 'text-white'}`}>
                            {core.name}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-sans truncate">
                            Days {VOLT_CORES[core.id].dayStart}–{VOLT_CORES[core.id].dayEnd} ({core.completedDays}/{core.totalDays} days)
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
                        {isCompleted && (
                          <span className="px-2.5 py-1 rounded-full bg-[#8CFF00]/10 text-[#8CFF00] border border-[#8CFF00]/30 font-bold flex items-center gap-1 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            COMPLETE
                          </span>
                        )}
                        {isInProgress && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold flex items-center gap-1 text-[11px] animate-pulse">
                            ◐ IN PROGRESS
                          </span>
                        )}
                        {!isCompleted && !isInProgress && (
                          <span className="px-2.5 py-1 rounded-full bg-neutral-900 text-neutral-500 border border-neutral-800 font-bold flex items-center gap-1 text-[11px]">
                            <Lock className="w-3 h-3" />
                            LOCKED
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Mascot Centerpiece & Selected Core Inspector */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Volt Mascot Showcase Container */}
            <div className="p-6 rounded-3xl bg-[#061513]/90 border border-[#071B18] shadow-2xl relative flex flex-col items-center justify-center min-h-[420px] overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20" />
              
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
                <img
                  src={isExplodedMode ? "/assets/volt_exploded.jpg" : "/assets/volt_mascot.jpg"}
                  alt="Volt Mascot System View"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl border border-[#13332D]/80"
                />

                {/* Overlaid Interactive Core Labels */}
                {isExplodedMode && (
                  <div className="absolute inset-0 pointer-events-none">
                    {coreStatuses.map((core) => {
                      const pos = corePositions[core.id];
                      const isSelected = selectedCoreId === core.id;
                      const isCompleted = core.isComplete;

                      return (
                        <button
                          key={core.id}
                          onClick={() => setSelectedCoreId(core.id)}
                          style={{ top: pos.top, left: pos.left }}
                          className={`absolute pointer-events-auto px-3 py-1.5 rounded-xl font-mono text-[11px] font-extrabold tracking-wider transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 border cursor-pointer ${
                            isSelected
                              ? 'bg-[#8CFF00] text-[#020605] border-white scale-110 shadow-[0_0_20px_#8CFF00] z-30'
                              : isCompleted
                              ? 'bg-[#061513]/90 text-[#8CFF00] border-[#8CFF00]/50 hover:scale-105 z-20 shadow-lg'
                              : 'bg-[#061513]/90 text-white border-neutral-700 hover:border-[#8CFF00] hover:scale-105 z-20 shadow-lg'
                          }`}
                        >
                          <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-[#020605]' : 'text-[#8CFF00]'}`} />
                          <span>{core.id} CORE</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Core Detailed Hardware Inspector */}
            {selectedCoreStatus && selectedCoreInfo && (
              <div className="p-6 rounded-3xl bg-[#061513]/95 border border-[#8CFF00]/40 shadow-2xl backdrop-blur-xl space-y-5 relative">
                
                <div className="flex items-center justify-between border-b border-[#13332D] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[#071B18] border border-[#8CFF00]/40 text-[#8CFF00] font-mono text-xs font-bold">
                      CORE {selectedCoreInfo.number}
                    </span>
                    <h3 className="text-xl font-extrabold text-white font-sans">
                      {selectedCoreInfo.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedCoreStatus.isComplete && (
                      <span className="px-3 py-1 rounded-full bg-[#8CFF00]/20 text-[#8CFF00] border border-[#8CFF00]/40 font-mono text-xs font-bold flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" />
                        CORE ACTIVATED
                      </span>
                    )}
                    {selectedCoreStatus.isInProgress && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 font-mono text-xs font-bold flex items-center gap-1">
                        ◐ CHARGING ({selectedCoreStatus.percentage}%)
                      </span>
                    )}
                    {selectedCoreStatus.isLocked && (
                      <span className="px-3 py-1 rounded-full bg-neutral-900 text-neutral-500 border border-neutral-800 font-mono text-xs font-bold flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5" />
                        CORE LOCKED
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {selectedCoreInfo.description}
                </p>

                {/* Challenge Section */}
                <div className="p-4 rounded-2xl bg-[#071B18] border border-[#13332D] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8CFF00] font-bold">
                      <Trophy className="w-4 h-4" />
                      CORE CHALLENGE — {selectedCoreInfo.challenge.keyword}
                    </div>
                    <button
                      onClick={() => toggleChallenge(selectedCoreStatus.id)}
                      className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition cursor-pointer ${
                        completedChallenges[selectedCoreStatus.id]
                          ? 'bg-[#8CFF00] text-[#020605]'
                          : 'bg-[#13332D] text-neutral-300 hover:text-white'
                      }`}
                    >
                      {completedChallenges[selectedCoreStatus.id] ? '✓ CHALLENGE COMPLETE' : 'MARK CHALLENGE DONE'}
                    </button>
                  </div>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {selectedCoreInfo.challenge.description}
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
