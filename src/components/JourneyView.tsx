import { useState } from 'react';
import type { DayMission, PhaseInfo, PhaseId } from '../types';
import { PHASES } from '../data/curriculum';
import {
  CheckCircle2,
  Navigation,
  ArrowRight,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

interface JourneyViewProps {
  missions: DayMission[];
  completedDays: number[];
  currentDay: number;
  onSelectDay: (dayNumber: number) => void;
  onExploreVolt: () => void;
  overallPercentage: number;
}

export const JourneyView: React.FC<JourneyViewProps> = ({
  missions,
  completedDays,
  currentDay,
  onSelectDay,
  onExploreVolt,
  overallPercentage
}) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<PhaseId | null>(null);

  const phaseIds: PhaseId[] = ['ORIENT', 'DISCOVER', 'BUILD', 'SPECIALIZE', 'CONTRIBUTE'];

  const selectedPhaseInfo = selectedPhaseId ? PHASES[selectedPhaseId] : null;
  const selectedPhaseMissions = selectedPhaseId ? missions.filter(m => m.phaseId === selectedPhaseId) : [];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#F5F5F0] text-[#061513]">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8CFF00]/15 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#071B18]/10 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 space-y-12 relative z-10">
        
        {/* Editorial Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold tracking-widest uppercase">
              <Navigation className="w-3.5 h-3.5" />
              COMPLETE ONBOARDING PLAN
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#061513] font-sans leading-none">
              90-DAY JOURNEY
            </h1>

            <p className="text-lg sm:text-2xl font-bold font-mono text-[#061513] tracking-wider">
              90 DAYS • 5 PHASES • ONE DEVELOPMENT JOURNEY
            </p>

            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              Explore the five phases of the Graduate Engineer Trainee development program. Drill down into specific phases, weeks, modules, activities, and daily deliverables.
            </p>
          </div>

          <button
            onClick={onExploreVolt}
            className="px-5 py-3 rounded-xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-black transition cursor-pointer shrink-0 shadow-md"
          >
            <span>VOLT BUILD ({overallPercentage}%)</span>
            <ArrowRight className="w-4 h-4 text-[#8CFF00]" />
          </button>
        </div>

        {/* LEARNING METHODOLOGY VISUAL SECTION */}
        <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              PROGRAM LEARNING METHODOLOGY
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold">ACTIVE LEARNING APPROACH</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { step: '01', name: 'LEARN', desc: 'Theoretical concepts & domain foundations' },
              { step: '02', name: 'EXPLORE', desc: 'Architecture mapping & tool experimentation' },
              { step: '03', name: 'APPLY', desc: 'Hands-on coding, exercises & labs' },
              { step: '04', name: 'REFLECT', desc: 'Peer discussion & self-evaluation' },
              { step: '05', name: 'DEMONSTRATE', desc: 'Capstone demos & executive sign-off' }
            ].map((m, idx) => (
              <div
                key={m.name}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative group hover:bg-slate-100 transition"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#061513] font-extrabold">{m.step}</span>
                  {idx < 4 && <ChevronRight className="w-4 h-4 text-slate-400 hidden sm:block" />}
                </div>
                <h4 className="font-extrabold text-sm text-[#061513] tracking-wider font-mono">{m.name}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5 PHASES OVERVIEW */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#061513] font-sans uppercase">
              THE FIVE PHASES OF GET DEVELOPMENT
            </h2>
            <span className="text-xs font-mono text-slate-500 font-bold">5 PHASES • 90 DAYS</span>
          </div>

          <div className="space-y-6">
            {phaseIds.map((pId) => {
              const phase: PhaseInfo = PHASES[pId];
              const phaseMissions = missions.filter(m => m.phaseId === pId);
              const completedInPhase = phaseMissions.filter(m => completedDays.includes(m.day)).length;
              const phasePercentage = Math.round((completedInPhase / phaseMissions.length) * 100);

              return (
                <div
                  key={pId}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-400 transition duration-300 shadow-sm space-y-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase">
                          PHASE {phase.number}
                        </span>
                        <span className="text-xs font-mono text-slate-600 font-bold">
                          DAYS {phase.dayStart}–{phase.dayEnd} ({phase.totalDays} DAYS)
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061513] font-sans">
                        {phase.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-mono text-emerald-700 font-bold">
                        {phase.subtitle} • {phase.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-700 max-w-3xl leading-relaxed font-normal">
                        {phase.description}
                      </p>
                    </div>

                    {/* Progress & Action */}
                    <div className="flex flex-col items-start lg:items-end justify-between space-y-4 shrink-0">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 w-full lg:w-48 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 text-[10px] font-bold">PHASE PROGRESS</span>
                          <span className="font-extrabold text-[#061513]">{phasePercentage}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                          <div
                            className="h-full bg-[#061513] rounded-full transition-all duration-500"
                            style={{ width: `${phasePercentage}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 block text-right">
                          {completedInPhase} / {phaseMissions.length} DAYS DONE
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedPhaseId(pId)}
                        className="w-full lg:w-auto px-6 py-3 rounded-xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black transition cursor-pointer shadow-md"
                      >
                        <span>EXPLORE PHASE</span>
                        <ArrowRight className="w-4 h-4 text-[#8CFF00]" />
                      </button>
                    </div>
                  </div>

                  {/* Weeks & Deliverables Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="md:col-span-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                        WEEKS & MODULE TOPICS
                      </span>
                      <div className="space-y-2">
                        {phase.weeks?.map((w, i) => (
                          <div key={i} className="text-xs font-mono">
                            <span className="font-bold text-[#061513] block">• {w.title}</span>
                            <span className="text-slate-600 text-[11px] pl-3 block leading-relaxed">
                              {w.topics.join(' · ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                        MILESTONE & DELIVERABLES
                      </span>
                      <p className="text-xs font-mono text-[#061513] font-bold">
                        {phase.milestone}
                      </p>
                      <ul className="space-y-1 text-xs font-mono text-slate-600 pt-1">
                        {phase.deliverables?.map((del, i) => (
                          <li key={i} className="line-clamp-1 text-[11px]">
                            ✓ {del}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* DETAILED PHASE DRILL-DOWN MODAL */}
      {selectedPhaseId && selectedPhaseInfo && (
        <div className="fixed inset-0 z-50 bg-[#020605]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 text-[#061513] overflow-y-auto">
          <div className="relative w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-300 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPhaseId(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-[#061513] p-2 rounded-xl bg-slate-100 transition cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Phase Header */}
            <div className="space-y-2 border-b border-slate-200 pb-4 pr-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase">
                  PHASE {selectedPhaseInfo.number}
                </span>
                <span className="text-xs font-mono text-slate-600 font-bold">
                  DAYS {selectedPhaseInfo.dayStart}–{selectedPhaseInfo.dayEnd} ({selectedPhaseInfo.totalDays} DAYS)
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-[#061513]">
                {selectedPhaseInfo.name} PHASE
              </h2>

              <p className="text-xs sm:text-sm font-mono text-emerald-800 font-bold">
                OBJECTIVE: {selectedPhaseInfo.description}
              </p>
            </div>

            {/* Methodology Bar */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#061513]">
              <span className="font-bold">METHODOLOGY STRUCTURE:</span>
              <span className="font-bold text-emerald-800">LEARN → EXPLORE → APPLY → REFLECT → DEMONSTRATE</span>
            </div>

            {/* Daily Mission Slots Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">
                DAILY ONBOARDING SLOTS IN {selectedPhaseInfo.name} ({selectedPhaseMissions.length} DAYS)
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                {selectedPhaseMissions.map((m) => {
                  const isDone = completedDays.includes(m.day);
                  const isCurrent = currentDay === m.day;

                  return (
                    <div
                      key={m.day}
                      onClick={() => {
                        onSelectDay(m.day);
                        setSelectedPhaseId(null);
                      }}
                      className={`p-4 rounded-2xl border text-left transition cursor-pointer space-y-2 ${
                        isCurrent
                          ? 'bg-[#061513] text-white border-[#061513] shadow-md ring-2 ring-[#8CFF00]'
                          : isDone
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={`font-bold ${isCurrent ? 'text-[#8CFF00]' : 'text-[#061513]'}`}>
                          DAY {String(m.day).padStart(2, '0')}
                        </span>
                        {isDone ? (
                          <span className="text-emerald-700 flex items-center gap-1 text-[10px] font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> COMPLETED
                          </span>
                        ) : isCurrent ? (
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#8CFF00] text-[#061513]">
                            ACTIVE TODAY
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[10px]">PENDING</span>
                        )}
                      </div>

                      <h4 className={`text-sm font-bold line-clamp-1 ${isCurrent ? 'text-white' : 'text-[#061513]'}`}>
                        {m.title}
                      </h4>
                      <p className={`text-xs line-clamp-2 leading-relaxed ${isCurrent ? 'text-slate-300' : 'text-slate-600'}`}>
                        {m.objective}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-600">
                Milestone: {selectedPhaseInfo.milestone}
              </span>

              <button
                onClick={() => setSelectedPhaseId(null)}
                className="px-6 py-2.5 rounded-xl bg-[#061513] text-[#8CFF00] font-mono text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-black transition"
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
