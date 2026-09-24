import { useState } from 'react';
import type { CoreId, CoreInfo, VoltCoreStatus } from '../types';
import { CORES } from '../data/curriculum';
import { Cpu, Zap, CheckCircle2, X, Sparkles, RefreshCw } from 'lucide-react';
import { CoreUnlocks } from './CoreUnlocks';

interface VoltViewProps {
  overallPercentage: number;
  coreStatuses: VoltCoreStatus[];
  onTriggerActivation: () => void;
  completedDaysCount: number;
}

export const VoltView: React.FC<VoltViewProps> = ({
  overallPercentage,
  coreStatuses,
  onTriggerActivation,
  completedDaysCount
}) => {
  const [selectedCoreId, setSelectedCoreId] = useState<CoreId | null>('NEURAL');
  const [isExplodedMode, setIsExplodedMode] = useState<boolean>(true);

  const selectedCoreStatus = coreStatuses.find(c => c.id === selectedCoreId);
  const selectedCoreInfo: CoreInfo | undefined = selectedCoreId ? CORES[selectedCoreId] : undefined;

  // Floating core button positions around official exploded Volt layout
  const corePositions: Record<CoreId, { top: string; left: string }> = {
    NEURAL: { top: '10%', left: '50%' },
    POWER: { top: '38%', left: '26%' },
    DOMAIN: { top: '38%', left: '74%' },
    ENGINE: { top: '78%', left: '30%' },
    DRIVE: { top: '80%', left: '70%' }
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 bg-radial-volt text-[#F5F5F0] relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8CFF00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-[1400px] mx-auto space-y-10 z-10 relative">
        
        {/* Editorial Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#071B18]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B18] border border-[#8CFF00]/30 text-xs font-mono tracking-widest text-[#8CFF00] uppercase shadow-[0_0_15px_rgba(140,255,0,0.1)]">
              <Cpu className="w-4 h-4 text-[#8CFF00]" />
              MASCOT SYSTEM ARCHITECTURE
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none font-sans">
              VOLT
            </h1>
            <p className="text-base sm:text-xl text-neutral-400 font-normal max-w-xl">
              Everything you've learned is powering something bigger.
            </p>
          </div>

          {/* Toggle View & Activation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExplodedMode(!isExplodedMode)}
              className="px-4 py-2.5 rounded-xl bg-[#071B18] border border-[#13332D] hover:border-[#8CFF00]/50 text-xs font-mono font-semibold text-neutral-300 flex items-center gap-2 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#8CFF00]" />
              {isExplodedMode ? 'SHOW STANDALONE VOLT' : 'EXAMINE INTERNAL CORES'}
            </button>

            {completedDaysCount === 30 && (
              <button
                onClick={onTriggerActivation}
                className="px-6 py-2.5 rounded-xl bg-[#8CFF00] text-[#020605] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 lime-glow hover:bg-[#9CFF00] transition cursor-pointer animate-pulse"
              >
                <Sparkles className="w-4 h-4" />
                INITIATE VOLT ACTIVATION
              </button>
            )}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 4 Columns: 5 Core Progress Bars */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Radial Energy Ring / Main Status Summary */}
            <div className="p-6 rounded-3xl bg-[#061513]/90 border border-[#071B18] shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[#13332D] pb-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  OVERALL VOLT BUILD
                </span>
                <span className="text-xs font-mono font-bold text-[#8CFF00]">
                  {completedDaysCount} / 30 DAYS
                </span>
              </div>

              <div className="py-6 flex items-center justify-center relative">
                {/* Radial Ring */}
                <div className="w-40 h-40 rounded-full border-4 border-[#071B18] border-t-[#8CFF00] border-r-[#8CFF00] flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(140,255,0,0.2)] animate-pulse-glow">
                  <span className="text-4xl font-extrabold font-mono text-white text-glow-lime">
                    {overallPercentage}%
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    VOLT BUILT
                  </span>
                </div>
              </div>
            </div>

            {/* 5 Core Progress Bars List */}
            <div className="bg-[#061513]/90 p-6 rounded-3xl border border-[#071B18] shadow-2xl space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold block border-b border-[#13332D] pb-2">
                FIVE INTERNAL CORES
              </span>

              <div className="space-y-3.5">
                {coreStatuses.map((status) => {
                  const isSelected = selectedCoreId === status.id;
                  return (
                    <button
                      key={status.id}
                      onClick={() => setSelectedCoreId(status.id)}
                      className={`w-full p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#071B18] border-[#8CFF00] shadow-[0_0_15px_rgba(140,255,0,0.15)]'
                          : 'bg-[#061513] border-[#13332D] hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className={`font-bold ${isSelected ? 'text-[#8CFF00]' : 'text-white'}`}>
                          {status.name}
                        </span>
                        <span className="font-extrabold text-white">
                          {status.percentage}%
                        </span>
                      </div>

                      {/* Elegant thin progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-[#020605] overflow-hidden border border-[#13332D]">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            status.percentage === 100
                              ? 'bg-[#8CFF00] shadow-[0_0_8px_#8CFF00]'
                              : 'bg-[#76E000]'
                          }`}
                          style={{ width: `${status.percentage}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Center 8 Columns: Interactive Exploded Volt Display & Side Drawer */}
          <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[550px]">
            
            {/* Volt Image with Visual Illusion Transition */}
            <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center">
              
              {/* Radial Energy Ring Graphic behind Volt */}
              <div className="absolute inset-0 m-auto w-[460px] h-[460px] rounded-full border border-[#8CFF00]/20 bg-[#071B18]/30 blur-[2px] pointer-events-none animate-pulse-glow" />

              {/* Exploded Volt vs Normal Volt Image */}
              <img
                src={isExplodedMode ? "/assets/volt_exploded.jpg" : "/assets/volt_mascot.jpg"}
                alt="Volt Mascot System View"
                className={`w-full h-full object-contain rounded-3xl transition-all duration-700 shadow-2xl border border-[#13332D]/70 ${
                  isExplodedMode ? 'scale-100 opacity-100' : 'scale-95 opacity-95'
                }`}
              />

              {/* Interactive Core Floating Labels around Volt (Exploded Mode) */}
              {isExplodedMode && (
                <div className="absolute inset-0 pointer-events-none">
                  {coreStatuses.map((status) => {
                    const pos = corePositions[status.id];
                    const isSelected = selectedCoreId === status.id;
                    return (
                      <button
                        key={status.id}
                        onClick={() => setSelectedCoreId(status.id)}
                        style={{ top: pos.top, left: pos.left }}
                        className={`absolute pointer-events-auto px-3.5 py-1.5 rounded-xl font-mono text-xs font-extrabold tracking-wider transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 border cursor-pointer ${
                          isSelected
                            ? 'bg-[#8CFF00] text-[#020605] border-white scale-110 shadow-[0_0_20px_#8CFF00] z-30'
                            : 'bg-[#061513]/90 text-white border-[#8CFF00]/40 hover:border-[#8CFF00] hover:scale-105 z-20 shadow-lg'
                        }`}
                      >
                        <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-[#020605]' : 'text-[#8CFF00]'}`} />
                        <span>{status.id} CORE</span>
                        <span className="text-[10px] opacity-80">({status.percentage}%)</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Selected Core Detailed Hardware Drawer / Modal */}
            {selectedCoreStatus && selectedCoreInfo && (
              <div className="w-full max-w-[620px] mt-6 p-6 rounded-3xl bg-[#061513]/95 border border-[#8CFF00]/40 shadow-2xl backdrop-blur-xl relative space-y-4">
                <button
                  onClick={() => setSelectedCoreId(null)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-[#071B18] transition"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#071B18] border border-[#8CFF00]/40 text-[#8CFF00] font-mono text-xs font-bold uppercase">
                    CORE {selectedCoreInfo.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {selectedCoreInfo.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#8CFF00] ml-auto pr-6">
                    {selectedCoreStatus.percentage}% POWERED
                  </span>
                </div>

                <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                  {selectedCoreInfo.description}
                </p>

                <div className="pt-2 border-t border-[#13332D]">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
                    CORE SYNOPSIS & KEY TOPICS
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCoreInfo.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-200 bg-[#071B18] p-2 rounded-xl border border-[#13332D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8CFF00] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Integrated Core Unlocks Section */}
        <CoreUnlocks />

      </div>
    </section>
  );
};
