import type { DayMission, CoreInfo, CoreId } from '../types';
import { CORES } from '../data/curriculum';
import { CheckCircle2, Circle, Navigation } from 'lucide-react';
import { Hero } from './Hero';

interface JourneyViewProps {
  missions: DayMission[];
  completedDays: number[];
  currentDay: number;
  onSelectDay: (dayNumber: number) => void;
  onExploreVolt: () => void;
  overallPercentage: number;
}

export const JourneyView = ({
  missions,
  completedDays,
  currentDay,
  onSelectDay,
  onExploreVolt,
  overallPercentage
}: JourneyViewProps) => {
  const coreIds: CoreId[] = ['POWER', 'DOMAIN', 'NEURAL', 'ENGINE', 'DRIVE'];

  const scrollToTimeline = () => {
    const el = document.getElementById('timeline-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#061513]">
      
      {/* Integrated Dark Hero Section at top of Journey */}
      <div className="bg-[#020605] text-[#F5F5F0]">
        <Hero
          onStartJourney={scrollToTimeline}
          onExploreVolt={onExploreVolt}
          overallPercentage={overallPercentage}
        />
      </div>

      <section id="timeline-start" className="py-16 px-6 max-w-[1200px] mx-auto space-y-12">
        
        {/* Journey Editorial Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-mono font-bold tracking-widest uppercase">
            <Navigation className="w-3.5 h-3.5" />
            30-DAY GET ROADMAP
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#061513] font-sans leading-none">
            THE <br />
            <span className="text-slate-800">30-DAY JOURNEY</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal">
            Five cores. Thirty days. One complete transformation.
          </p>

        </div>

        {/* Continuous Timeline by Core */}
        <div className="space-y-16 relative">
          
          {/* Vertical central timeline line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-1 bg-slate-200 rounded-full pointer-events-none" />

          {coreIds.map((coreId) => {
            const core: CoreInfo = CORES[coreId];
            const coreMissions = missions.filter(m => m.coreId === coreId);
            const completedInCore = coreMissions.filter(m => completedDays.includes(m.day)).length;
            const corePercentage = Math.round((completedInCore / coreMissions.length) * 100);

            return (
              <div key={coreId} className="relative pl-14 sm:pl-20 space-y-6">
                
                {/* Core Header Marker */}
                <div className="absolute left-3 sm:left-5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-[#061513] border-4 border-white text-[#8CFF00] font-mono text-xs font-bold flex items-center justify-center shadow-md">
                  {core.number}
                </div>

                {/* Core Overview Header */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-extrabold tracking-widest text-[#061513] uppercase">
                        {core.name}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        DAYS {String(core.dayStart).padStart(2, '0')}–{String(core.dayEnd).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#061513] mt-1">
                      {core.subtitle}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xl">
                      {core.description}
                    </p>
                  </div>

                  {/* Core Mini Progress */}
                  <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-6 shrink-0">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono text-slate-500 uppercase font-semibold">CORE PROGRESS</span>
                      <span className="text-xl font-mono font-extrabold text-[#061513]">{corePercentage}%</span>
                    </div>
                    <div className="w-16 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-[#061513] rounded-full transition-all duration-500"
                        style={{ width: `${corePercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Compact Timeline Nodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coreMissions.map((mission) => {
                    const isCompletedNode = completedDays.includes(mission.day);
                    const isCurrentNode = currentDay === mission.day;

                    return (
                      <button
                        key={mission.day}
                        onClick={() => onSelectDay(mission.day)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3 relative cursor-pointer group ${
                          isCurrentNode
                            ? 'bg-[#061513] text-white border-[#061513] shadow-lg ring-2 ring-[#8CFF00]/60 scale-[1.01]'
                            : isCompletedNode
                            ? 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:shadow-sm'
                            : 'bg-slate-50 text-slate-500 border-slate-200/80 hover:bg-white hover:text-slate-800'
                        }`}
                      >
                        {/* Node Icon */}
                        <div className="mt-0.5 shrink-0">
                          {isCompletedNode ? (
                            <CheckCircle2 className={`w-5 h-5 ${isCurrentNode ? 'text-[#8CFF00]' : 'text-emerald-600'}`} />
                          ) : isCurrentNode ? (
                            <span className="w-5 h-5 rounded-full bg-[#8CFF00] flex items-center justify-center animate-ping">
                              <span className="w-2 h-2 rounded-full bg-[#061513]" />
                            </span>
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 group-hover:text-slate-500" />
                          )}
                        </div>

                        {/* Node Info */}
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-[11px] font-mono font-bold ${
                              isCurrentNode ? 'text-[#8CFF00]' : 'text-slate-600'
                            }`}>
                              DAY {String(mission.day).padStart(2, '0')}
                            </span>
                            
                            {isCurrentNode && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#8CFF00] text-[#061513] uppercase tracking-wider">
                                YOU ARE HERE
                              </span>
                            )}
                          </div>
                          
                          <h4 className={`text-sm font-bold truncate ${
                            isCurrentNode ? 'text-white' : 'text-[#061513]'
                          }`}>
                            {mission.title}
                          </h4>

                          <p className={`text-xs line-clamp-1 ${
                            isCurrentNode ? 'text-neutral-300' : 'text-slate-600'
                          }`}>
                            {mission.objective}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

              </div>
            );
          })}

        </div>

      </section>
    </div>
  );
};
