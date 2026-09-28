import { useState } from 'react';
import type { DayMission, PhaseId } from '../types';
import { PHASES } from '../data/curriculum';
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  X,
  Zap,
  Flame
} from 'lucide-react';

interface HomeViewProps {
  currentDayNumber: number;
  completedDays: number[];
  overallPercentage: number;
  currentMission: DayMission;
  onGoToJourney: () => void;
  onGoToVolt: () => void;
  onToggleCheckpoint: (day: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentDayNumber,
  completedDays,
  overallPercentage,
  currentMission,
  onGoToJourney,
  onGoToVolt,
  onToggleCheckpoint
}) => {
  const [showTodayModal, setShowTodayModal] = useState(false);

  const currentPhaseInfo = PHASES[currentMission.phaseId];
  const isCurrentDayDone = completedDays.includes(currentDayNumber);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#F5F5F0] text-[#061513]">
      
      {/* Background ambient light */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8CFF00]/15 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#071B18]/10 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 space-y-10 relative z-10">

        {/* V1 SIMPLE HERO AREA */}
        <section className="py-4 sm:py-8 text-[#061513] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Editorial Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Program Label Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8CFF00] border border-[#76E000]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#061513] uppercase">
                  ESYASOFT GRADUATE PROGRAM 2026
                </span>
              </div>

              {/* 2. Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#061513] leading-[1.05] font-sans">
                Your first 90 days.<br />
                Made simple.
              </h1>

              {/* 3. Short Explanatory Copy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Welcome to Esyasoft. Your structured journey from understanding the company and energy domain to building technical capability, discovering your specialization, and starting to contribute.
              </p>

              {/* 4. Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onGoToJourney}
                  className="px-6 py-3.5 rounded-xl bg-[#061513] text-[#8CFF00] font-bold text-xs tracking-wider uppercase font-mono flex items-center gap-2.5 hover:bg-black hover:scale-[1.02] transition-all cursor-pointer shadow-md group"
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight className="w-4 h-4 text-[#8CFF00] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onGoToJourney}
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#061513] font-bold text-xs tracking-wider uppercase font-mono flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-xs"
                >
                  VIEW 90-DAY PLAN
                </button>
              </div>

              {/* 5. Cohort Detail */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 w-full max-w-md">
                <div className="flex -space-x-2 shrink-0">
                  <span className="w-7 h-7 rounded-full bg-[#8CFF00] border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-[#061513] shadow-xs">A</span>
                  <span className="w-7 h-7 rounded-full bg-[#061513] border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-[#8CFF00] shadow-xs">R</span>
                  <span className="w-7 h-7 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-white shadow-xs">S</span>
                </div>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  Join your GET cohort and start your journey at Esyasoft.
                </span>
              </div>

            </div>

            {/* Right Column: Simple Dark Volt Presentation Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[420px] rounded-[2.2rem] bg-[#061513] border border-[#13332D] shadow-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden group">
                {/* Subtle inner ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8CFF00]/10 via-transparent to-[#071B18]/60 pointer-events-none" />
                
                <img
                  src="/assets/volt_mascot.png"
                  alt="Volt Mascot — Esyasoft GET Mascot"
                  className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain relative z-10 animate-float drop-shadow-[0_15px_30px_rgba(140,255,0,0.2)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: TODAY (MAJOR DYNAMIC COMPONENT) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#061513] font-sans uppercase">
                TODAY
              </h2>
            </div>

            <button
              onClick={() => setShowTodayModal(true)}
              className="px-5 py-2.5 rounded-xl bg-[#061513] text-[#8CFF00] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-black transition cursor-pointer shadow-md"
            >
              <span>VIEW TODAY</span>
              <ArrowRight className="w-4 h-4 text-[#8CFF00]" />
            </button>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-slate-100 text-[#061513] font-mono text-xs font-bold uppercase border border-slate-200">
                  DAY {String(currentDayNumber).padStart(2, '0')}
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-xs font-bold uppercase border border-emerald-200">
                  {currentPhaseInfo.name} PHASE
                </span>
                {isCurrentDayDone && (
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-mono text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" /> COMPLETED
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061513]">
                {currentMission.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {currentMission.objective}
              </p>

              {/* Dynamic Daily Schedule */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentMission.timeSchedule?.map((slot, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#061513] font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" /> {slot.time}
                      </span>
                      <span className="text-slate-500 font-semibold">{slot.type}</span>
                    </div>
                    <p className="text-xs text-[#061513] font-bold line-clamp-1">{slot.activity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Checkpoint Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white space-y-4 flex flex-col justify-between border-l-4 border-[#8CFF00]">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8CFF00] uppercase tracking-widest font-bold block">
                  DAILY CHECKPOINT REQUIREMENT
                </span>
                <p className="text-xs text-slate-200 font-mono leading-relaxed bg-black/50 p-3.5 rounded-xl border border-slate-800">
                  "{currentMission.checkpoint}"
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onToggleCheckpoint(currentDayNumber)}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer ${
                    isCurrentDayDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#061513] text-[#8CFF00] hover:bg-black border border-[#8CFF00]/40'
                  }`}
                >
                  {isCurrentDayDone ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      CHECKPOINT COMPLETED ✓
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-[#8CFF00]" />
                      MARK CHECKPOINT COMPLETE
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: JOURNEY PROGRESS (5 PHASES) */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#061513] font-sans uppercase">
              JOURNEY PROGRESS
            </h2>
            <button
              onClick={onGoToJourney}
              className="text-xs font-mono text-[#061513] font-bold hover:underline flex items-center gap-1"
            >
              EXPLORE FULL 90-DAY PLAN <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {(['ORIENT', 'DISCOVER', 'BUILD', 'SPECIALIZE', 'CONTRIBUTE'] as PhaseId[]).map((pId) => {
              const phaseInfo = PHASES[pId];
              const phaseMissions = Array.from({ length: phaseInfo.totalDays }, (_, i) => phaseInfo.dayStart + i);
              const completedInPhase = phaseMissions.filter(d => completedDays.includes(d)).length;
              const percentage = Math.round((completedInPhase / phaseInfo.totalDays) * 100);

              return (
                <div
                  key={pId}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-slate-400 transition duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[#061513] font-mono text-[10px] font-bold">
                        PHASE {phaseInfo.number}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        DAYS {phaseInfo.dayStart}–{phaseInfo.dayEnd}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-base text-[#061513] leading-tight">
                      {phaseInfo.name}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {phaseInfo.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 text-[10px] font-bold">PROGRESS</span>
                      <span className="font-bold text-[#061513]">{percentage}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                      <div
                        className="h-full rounded-full bg-[#061513] transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: NEXT MILESTONE & SECTION 4: VOLT PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">

          {/* Left 7 Columns: NEXT MILESTONE */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-600" />
                  NEXT MILESTONE
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-[#061513] font-mono text-xs font-bold border border-slate-200">
                  UPCOMING CHECKPOINT
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#061513]">
                  {currentPhaseInfo.milestone}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Pass your {currentPhaseInfo.name} phase evaluation milestone by completing your daily assignments and presenting your phase deliverable.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-500">
                  Target Window: Days {currentPhaseInfo.dayStart}–{currentPhaseInfo.dayEnd}
                </div>
                <button
                  onClick={onGoToJourney}
                  className="px-5 py-2.5 rounded-xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black transition cursor-pointer"
                >
                  <span>VIEW JOURNEY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8CFF00]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: VOLT PREVIEW */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#061513] text-white border border-[#13332D] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#13332D] pb-3">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
                  VOLT PREVIEW
                </span>
                <span className="px-3 py-1 rounded-full bg-[#071B18] text-[#8CFF00] font-mono text-xs font-bold border border-[#8CFF00]/30">
                  {overallPercentage}% BUILT
                </span>
              </div>

              {/* Volt Image Preview */}
              <div className="relative aspect-square max-w-[220px] mx-auto rounded-2xl bg-[#020605] border border-[#13332D] p-3 flex items-center justify-center overflow-hidden group">
                <img
                  src="/assets/volt_mascot.jpg"
                  alt="Volt Mascot System View"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="space-y-1 text-center">
                <h4 className="text-xl font-extrabold text-white">VOLT</h4>
                <p className="text-xs font-mono text-[#8CFF00] font-bold">
                  {overallPercentage}% BUILT
                </p>
              </div>

              <button
                onClick={onGoToVolt}
                className="w-full py-3.5 px-4 rounded-xl bg-[#8CFF00] text-[#020605] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition hover:bg-[#9CFF00] cursor-pointer lime-glow"
              >
                VIEW VOLT
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* TODAY DETAILED MODAL */}
      {showTodayModal && (
        <div className="fixed inset-0 z-50 bg-[#020605]/85 backdrop-blur-md flex items-center justify-center p-6 text-white overflow-y-auto">
          <div className="relative w-full max-w-2xl p-8 rounded-3xl bg-[#061513] border border-[#8CFF00]/50 shadow-2xl space-y-6">
            <button
              onClick={() => setShowTodayModal(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-xl bg-[#071B18] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-[#8CFF00] font-bold uppercase tracking-wider">
                TODAY • DAY {String(currentDayNumber).padStart(2, '0')} · {currentPhaseInfo.name} PHASE
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {currentMission.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-medium">
              {currentMission.objective}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#13332D]">
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase font-bold tracking-wider">
                  LEARNING POINTS
                </span>
                <ul className="space-y-2 text-xs font-mono text-neutral-200">
                  {currentMission.learn.map((item, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-[#071B18] border border-[#13332D] flex items-start gap-2.5">
                      <span className="text-[#8CFF00] font-bold">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#8CFF00] uppercase font-bold tracking-wider">
                  DAILY CHECKPOINT
                </span>
                <p className="text-xs font-mono text-neutral-300 bg-[#071B18] p-4 rounded-xl border border-[#13332D]">
                  "{currentMission.checkpoint}"
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onToggleCheckpoint(currentDayNumber)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase ${
                  isCurrentDayDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#8CFF00] text-[#020605] hover:bg-[#9CFF00]'
                }`}
              >
                {isCurrentDayDone ? 'CHECKPOINT COMPLETED ✓' : 'MARK CHECKPOINT DONE'}
              </button>

              <button
                onClick={() => setShowTodayModal(false)}
                className="px-5 py-2.5 rounded-xl bg-[#071B18] border border-[#13332D] text-white font-mono text-xs font-bold uppercase"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
