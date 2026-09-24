import { useState } from 'react';
import type { DayMission, CoreInfo } from '../types';
import { CORES } from '../data/curriculum';
import { CheckCircle2, Circle, ArrowRight, BookOpen, Code, Trophy, Sparkles, ChevronRight, Zap } from 'lucide-react';

interface TodayViewProps {
  currentDayMission: DayMission;
  allMissions: DayMission[];
  completedDays: number[];
  onCompleteCheckpoint: (dayNumber: number) => void;
  onSelectDay: (dayNumber: number) => void;
  overallPercentage: number;
}

type StepType = 'LEARN' | 'PRACTICE' | 'CHECKPOINT' | 'UNLOCK';

export const TodayView: React.FC<TodayViewProps> = ({
  currentDayMission,
  allMissions,
  completedDays,
  onCompleteCheckpoint,
  onSelectDay,
  overallPercentage
}) => {
  const [activeStep, setActiveStep] = useState<StepType>('LEARN');
  const [isAnimating, setIsAnimating] = useState(false);

  const isCompleted = completedDays.includes(currentDayMission.day);
  const currentCore: CoreInfo = CORES[currentDayMission.coreId];

  const handleComplete = () => {
    setIsAnimating(true);
    onCompleteCheckpoint(currentDayMission.day);
    setTimeout(() => {
      setIsAnimating(false);
      setActiveStep('UNLOCK');
    }, 600);
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-6 bg-[#F5F5F0] text-[#061513]">
      <div className="max-w-[1400px] mx-auto space-y-10">

        {/* Top Header & Day Selector bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold tracking-widest uppercase">
                DAY {String(currentDayMission.day).padStart(2, '0')} / 30
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold uppercase">
                {currentCore.name}
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold font-mono bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  COMPLETED
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-[#061513]">
              {currentDayMission.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-2 font-normal">
              {currentDayMission.objective}
            </p>
          </div>

          {/* Prototype Day Selector */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start gap-2">
            <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
              DEMO DAY SELECTOR
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[1, 8, 18, 30].map((dayNum) => (
                <button
                  key={dayNum}
                  onClick={() => onSelectDay(dayNum)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    currentDayMission.day === dayNum
                      ? 'bg-[#061513] text-[#8CFF00] font-bold shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  DAY {String(dayNum).padStart(2, '0')}
                </button>
              ))}
              
              {/* Full Day Picker Dropdown */}
              <select
                value={currentDayMission.day}
                onChange={(e) => onSelectDay(Number(e.target.value))}
                className="px-2 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-mono font-semibold border-none cursor-pointer focus:ring-2 focus:ring-[#061513]"
              >
                {allMissions.map((m) => (
                  <option key={m.day} value={m.day}>
                    Day {m.day}: {m.title.slice(0, 18)}...
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left 8 Columns: 4 Horizontal Progression Steps */}
          <div className="lg:col-span-8 space-y-6">

            {/* Step Navigation Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
              {[
                { id: 'LEARN', num: '01', title: 'LEARN', icon: BookOpen },
                { id: 'PRACTICE', num: '02', title: 'PRACTICE', icon: Code },
                { id: 'CHECKPOINT', num: '03', title: 'CHECKPOINT', icon: Zap },
                { id: 'UNLOCK', num: '04', title: 'UNLOCK', icon: Trophy },
              ].map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id as StepType)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all text-left ${
                      isActive
                        ? 'bg-[#061513] text-[#8CFF00] font-bold shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-black font-semibold'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-70">{step.num}</span>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="font-mono text-xs tracking-wider uppercase">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Content Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#061513]" />

              {/* Step 01: LEARN */}
              {activeStep === 'LEARN' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#061513]">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-xl text-[#061513]">Key Learning Concepts</h2>
                        <p className="text-xs text-slate-500 font-mono uppercase">Phase 01 — Theoretical Mastery</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {currentDayMission.learn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="w-6 h-6 rounded-full bg-[#061513] text-[#8CFF00] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800 text-base font-medium leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveStep('PRACTICE')}
                      className="px-6 py-3 rounded-xl bg-[#061513] text-white font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-slate-800 transition cursor-pointer"
                    >
                      PROCEED TO PRACTICE <ChevronRight className="w-4 h-4 text-[#8CFF00]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 02: PRACTICE */}
              {activeStep === 'PRACTICE' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#061513]">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-xl text-[#061513]">Practical Exercises</h2>
                        <p className="text-xs text-slate-500 font-mono uppercase">Phase 02 — Hands-On Application</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {currentDayMission.practice.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <Circle className="w-5 h-5 text-[#061513] shrink-0 mt-0.5" />
                        <span className="text-slate-800 text-base font-medium leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveStep('CHECKPOINT')}
                      className="px-6 py-3 rounded-xl bg-[#061513] text-white font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-slate-800 transition cursor-pointer"
                    >
                      GO TO CHECKPOINT <ChevronRight className="w-4 h-4 text-[#8CFF00]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 03: CHECKPOINT */}
              {activeStep === 'CHECKPOINT' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-xl text-[#061513]">Daily Milestone Checkpoint</h2>
                        <p className="text-xs text-slate-500 font-mono uppercase">Phase 03 — Power Up Core</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#8CFF00]/10 rounded-full blur-xl pointer-events-none" />
                    <span className="text-xs font-mono text-[#8CFF00] font-bold tracking-widest uppercase">
                      MISSION REQUIREMENT
                    </span>
                    <p className="text-lg font-medium leading-relaxed text-slate-200">
                      "{currentDayMission.checkpoint}"
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      {isCompleted ? 'Status: Checkpoint Verified' : 'Action required to proceed'}
                    </span>

                    <button
                      onClick={handleComplete}
                      disabled={isCompleted}
                      className={`px-8 py-4 rounded-xl font-mono font-bold text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-600 text-white cursor-default'
                          : isAnimating
                          ? 'bg-[#8CFF00] text-[#061513] animate-pulse scale-105'
                          : 'bg-[#061513] text-[#8CFF00] hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          COMPLETED ✓
                        </>
                      ) : (
                        <>
                          COMPLETE CHECKPOINT
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 04: UNLOCK */}
              {activeStep === 'UNLOCK' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#8CFF00]/20 flex items-center justify-center text-[#061513]">
                        <Trophy className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h2 className="font-bold text-xl text-[#061513]">Volt Core Component Unlocked</h2>
                        <p className="text-xs text-slate-500 font-mono uppercase">Phase 04 — Build Progression</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#061513] to-[#0A211E] text-white flex items-center gap-6 shadow-xl border border-[#8CFF00]/30">
                    <div className="w-16 h-16 rounded-2xl bg-[#071B18] border border-[#8CFF00] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(140,255,0,0.3)]">
                      <Sparkles className="w-8 h-8 text-[#8CFF00]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#8CFF00] font-semibold uppercase tracking-wider">
                        NEW REWARD UNLOCKED
                      </span>
                      <h3 className="text-xl font-extrabold text-white mt-1">
                        {currentDayMission.unlockItem}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        Powered into {currentCore.name} • Total Volt Build: {overallPercentage}%
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono">Ready for tomorrow’s mission</span>
                    {currentDayMission.day < 30 && (
                      <button
                        onClick={() => onSelectDay(currentDayMission.day + 1)}
                        className="px-6 py-3 rounded-xl bg-[#061513] text-[#8CFF00] font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-black transition cursor-pointer"
                      >
                        NEXT DAY MISSION <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right 4 Columns: Volt Status & Core Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">

            {/* Volt Progress Card */}
            <div className="bg-[#061513] text-white p-6 rounded-3xl border border-[#071B18] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#13332D] pb-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  VOLT BUILD STATUS
                </span>
                <span className="text-xs font-mono font-bold text-[#8CFF00]">
                  {overallPercentage}% BUILT
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 rounded-full bg-[#020605] overflow-hidden p-0.5 border border-[#13332D]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#76E000] to-[#8CFF00] transition-all duration-700 shadow-[0_0_10px_#8CFF00]"
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>

              {/* Volt Image Preview */}
              <div className="pt-2 flex flex-col items-center">
                <img
                  src="/assets/volt_mascot.jpg"
                  alt="Volt Mascot"
                  className="w-36 h-36 object-contain rounded-2xl border border-[#13332D] bg-[#071B18]/50"
                />
                <span className="text-xs font-mono text-neutral-300 mt-3 text-center">
                  "Every completed checkpoint brings me online."
                </span>
              </div>
            </div>

            {/* Current Core Info Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                CURRENT CORE REGION
              </span>
              <h3 className="text-xl font-extrabold text-[#061513]">
                {currentCore.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {currentCore.description}
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Core Days: {currentCore.dayStart} – {currentCore.dayEnd}</span>
                <span className="font-bold text-[#061513]">{currentCore.subtitle}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
