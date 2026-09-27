import { useState } from 'react';
import { Sliders, ChevronUp, ChevronDown, Minus, Plus, Calendar } from 'lucide-react';

interface DemoToolbarProps {
  currentDay: number;
  automaticDay: number;
  isDemoOverride: boolean;
  onSelectDay: (day: number) => void;
  onResetToToday: () => void;
  completedCount: number;
  onCompleteAllDays: () => void;
}

export const DemoToolbar = ({
  currentDay,
  automaticDay,
  isDemoOverride,
  onSelectDay,
  onResetToToday,
  completedCount,
  onCompleteAllDays,
}: DemoToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrevDay = () => {
    if (currentDay > 1) {
      onSelectDay(currentDay - 1);
    }
  };

  const handleNextDay = () => {
    if (currentDay < 90) {
      onSelectDay(currentDay + 1);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-xs">
      {isOpen ? (
        <div className="p-4 rounded-2xl bg-[#061513]/95 border border-[#8CFF00]/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl text-white space-y-3.5 w-80">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#13332D] pb-2.5">
            <div className="flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-[#8CFF00]" />
              <span className="font-bold text-white uppercase text-[11px] tracking-wider">
                DEMO CONTROL TOOLBAR
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded hover:bg-[#071B18] transition cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Indicator & Day Stepper */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>STATUS:</span>
              <span className={`font-bold ${isDemoOverride ? 'text-amber-400' : 'text-[#8CFF00]'}`}>
                {isDemoOverride ? `DEMO OVERRIDE (DAY ${currentDay})` : `AUTO DATE (DAY ${automaticDay})`}
              </span>
            </div>

            {/* Stepper Control: [ − ] [ DAY XX / 90 ] [ + ] */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#071B18] border border-[#13332D]">
              <button
                onClick={handlePrevDay}
                disabled={currentDay <= 1}
                className="p-1.5 rounded-lg bg-[#061513] border border-[#13332D] text-neutral-200 hover:text-[#8CFF00] hover:border-[#8CFF00]/50 disabled:opacity-40 transition cursor-pointer"
                title="Previous Day"
              >
                <Minus className="w-4 h-4" />
              </button>

              <div className="flex-1 text-center font-bold text-sm text-[#8CFF00]">
                DAY {String(currentDay).padStart(2, '0')} <span className="text-neutral-500 text-xs font-normal">/ 90</span>
              </div>

              <button
                onClick={handleNextDay}
                disabled={currentDay >= 90}
                className="p-1.5 rounded-lg bg-[#061513] border border-[#13332D] text-neutral-200 hover:text-[#8CFF00] hover:border-[#8CFF00]/50 disabled:opacity-40 transition cursor-pointer"
                title="Next Day"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-neutral-400 uppercase font-semibold">PRESET MILESTONES</span>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 23, 45, 90].map((dayNum) => (
                <button
                  key={dayNum}
                  onClick={() => onSelectDay(dayNum)}
                  className={`py-1.5 rounded-lg text-center font-bold transition cursor-pointer text-xs ${
                    currentDay === dayNum
                      ? 'bg-[#8CFF00] text-[#020605] shadow-[0_0_10px_rgba(140,255,0,0.3)]'
                      : 'bg-[#071B18] text-neutral-300 border border-[#13332D] hover:border-[#8CFF00]/40'
                  }`}
                >
                  D{String(dayNum).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-[#13332D] space-y-2">
            <button
              onClick={onResetToToday}
              className="w-full py-2 px-3 rounded-xl bg-[#071B18] border border-[#13332D] hover:border-[#8CFF00]/50 text-neutral-200 hover:text-[#8CFF00] font-bold flex items-center justify-center gap-2 transition cursor-pointer text-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#8CFF00]" />
              RESET TO TODAY (DAY {automaticDay})
            </button>

            <button
              onClick={onCompleteAllDays}
              className="w-full py-1.5 px-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              COMPLETE ALL DAYS ({completedCount}/90)
            </button>
          </div>

        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="px-3.5 py-2 rounded-full bg-[#061513]/95 border border-[#8CFF00]/40 text-neutral-200 hover:text-white hover:border-[#8CFF00] shadow-2xl backdrop-blur-xl flex items-center gap-2 cursor-pointer group"
        >
          <Sliders className="w-3.5 h-3.5 text-[#8CFF00] group-hover:rotate-45 transition-transform" />
          <span className="font-bold">DEMO MODE</span>
          <span className="px-2 py-0.5 rounded bg-[#071B18] border border-[#8CFF00]/30 text-[#8CFF00] font-mono text-[10px] font-extrabold">
            DAY {currentDay}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      )}
    </div>
  );
};
