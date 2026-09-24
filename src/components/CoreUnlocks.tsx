import { useState, useEffect } from 'react';
import type { CoreId, CoreUnlock } from '../types';
import { CORE_UNLOCKS_DATA } from '../data/coreUnlocksData';
import { CORES } from '../data/curriculum';
import {
  Lock,
  CheckCircle2,
  Ticket,
  ArrowRight,
  X,
  Compass,
  Sparkles,
  RotateCcw
} from 'lucide-react';

const STORAGE_KEY_UNLOCKS = 'esyasoft_core_unlocks_status';

export const CoreUnlocks = () => {
  // Store array of unlocked core IDs in localStorage
  const [unlockedCoreIds, setUnlockedCoreIds] = useState<CoreId[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_UNLOCKS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read core unlocks from localStorage', e);
    }
    return ['POWER']; // Default baseline: Power Core experience unlocked
  });

  const [activeModalUnlock, setActiveModalUnlock] = useState<CoreUnlock | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_UNLOCKS, JSON.stringify(unlockedCoreIds));
    } catch (e) {
      // ignore
    }
  }, [unlockedCoreIds]);

  const toggleMarkComplete = (coreId: CoreId) => {
    if (!unlockedCoreIds.includes(coreId)) {
      setUnlockedCoreIds([...unlockedCoreIds, coreId]);
    }
  };

  const resetUnlocks = () => {
    setUnlockedCoreIds(['POWER']);
  };

  const totalUnlocks = CORE_UNLOCKS_DATA.length;
  const unlockedCount = unlockedCoreIds.length;

  return (
    <div className="space-y-10 pt-10 border-t border-[#13332D]">
      
      {/* Header & Progress Counter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B18] border border-[#8CFF00]/40 text-xs font-mono font-bold tracking-widest text-[#8CFF00] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8CFF00]" />
            CORE UNLOCKS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Learn. Explore. Unlock what’s next.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Every Core comes with a challenge designed to take your learning beyond the screen. Complete it to unlock an experience created exclusively for your GET journey.
          </p>
        </div>

        {/* Progress Badge Card */}
        <div className="p-4 rounded-2xl bg-[#071B18] border border-[#13332D] shadow-xl flex flex-col items-start lg:items-end space-y-1 shrink-0">
          <span className="text-[10px] font-mono text-[#8CFF00] uppercase font-extrabold tracking-widest">
            UNLOCK PROGRESS
          </span>
          <span className="text-2xl font-extrabold font-mono text-white">
            {unlockedCount} OF {totalUnlocks} EXPERIENCES UNLOCKED
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            Keep building. There are more doors ahead.
          </span>
        </div>
      </div>

      {/* Grid of 5 Core Unlock Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_UNLOCKS_DATA.map((item) => {
          const isUnlocked = unlockedCoreIds.includes(item.coreId);
          const coreInfo = CORES[item.coreId];

          return (
            <div
              key={item.coreId}
              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                isUnlocked
                  ? 'bg-[#071B18]/90 border-[#8CFF00]/50 shadow-[0_0_20px_rgba(140,255,0,0.12)]'
                  : 'bg-[#061513]/90 border-[#13332D] hover:border-neutral-700'
              }`}
            >
              {/* Top: Core Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#020605] border border-[#13332D] text-[#8CFF00] font-mono text-xs font-bold uppercase">
                    {coreInfo.name}
                  </span>
                  
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#8CFF00]/20 text-[#8CFF00] text-[10px] font-mono font-bold uppercase">
                      <Ticket className="w-3 h-3" />
                      EXPERIENCE UNLOCKED
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 text-[10px] font-mono font-semibold uppercase">
                      <Lock className="w-3 h-3" />
                      NOT YET UNLOCKED
                    </span>
                  )}
                </div>

                {/* Challenge Info */}
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-[#8CFF00] tracking-wider">
                      {item.challenge.keyword}
                    </span>
                    {isUnlocked && (
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Challenge completed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 font-normal leading-relaxed">
                    {item.challenge.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#13332D] pt-4 space-y-4">
                {isUnlocked ? (
                  <>
                    <div className="space-y-1">
                      <h4 className="text-lg font-extrabold text-white">
                        {item.experience.title}
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        {item.experience.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveModalUnlock(item)}
                      className="w-full py-3 px-4 rounded-xl bg-[#8CFF00] text-[#020605] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition hover:bg-[#9CFF00] cursor-pointer lime-glow"
                    >
                      VIEW EXPERIENCE
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-neutral-400 font-mono">
                      Complete your Core challenge to open this experience.
                    </p>

                    <button
                      onClick={() => toggleMarkComplete(item.coreId)}
                      className="w-full py-3 px-4 rounded-xl bg-[#071B18] border border-[#13332D] hover:border-[#8CFF00]/60 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer"
                    >
                      MARK COMPLETE
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Unlocks Option for prototype testing */}
      <div className="flex justify-end pt-2">
        <button
          onClick={resetUnlocks}
          className="px-3 py-1.5 rounded-lg bg-[#071B18] border border-[#13332D] text-neutral-400 hover:text-white font-mono text-[11px] flex items-center gap-1.5 transition cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          RESET UNLOCKS STATE
        </button>
      </div>

      {/* Unlocked Experience Detail Modal / Drawer */}
      {activeModalUnlock && (
        <div className="fixed inset-0 z-50 bg-[#020605]/90 backdrop-blur-md flex items-center justify-center p-6 text-white overflow-y-auto">
          <div className="relative w-full max-w-xl p-8 rounded-3xl bg-[#061513] border border-[#8CFF00]/50 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalUnlock(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-xl bg-[#071B18] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#071B18] border border-[#8CFF00] text-[#8CFF00] flex items-center justify-center">
                <Ticket className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-wider">
                  UNLOCKED EXPERIENCE • {activeModalUnlock.coreId} CORE
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-0.5">
                  {activeModalUnlock.experience.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 font-medium leading-relaxed">
              "{activeModalUnlock.experience.description}"
            </p>

            <div className="space-y-4 pt-4 border-t border-[#13332D]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-neutral-400 uppercase font-bold tracking-wider">
                  WHAT THE EXPERIENCE IS ABOUT
                </span>
                <p className="text-xs text-neutral-200 leading-relaxed bg-[#071B18] p-4 rounded-2xl border border-[#13332D]">
                  {activeModalUnlock.experience.details}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#8CFF00] uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  NEXT STEPS & INSTRUCTIONS
                </span>
                <p className="text-xs font-mono text-neutral-300 bg-[#071B18] p-4 rounded-2xl border border-[#13332D] leading-relaxed">
                  {activeModalUnlock.experience.instructions}
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalUnlock(null)}
                className="px-6 py-3 rounded-xl bg-[#8CFF00] text-[#020605] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#9CFF00] transition cursor-pointer"
              >
                GOT IT
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
